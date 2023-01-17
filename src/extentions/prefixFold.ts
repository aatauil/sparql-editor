

import CodeMirror from "codemirror";
import * as TokenUtils from "../utils/tokenUtils";
const PREFIX_KEYWORD = "PREFIX ";

export function findFirstPrefixLine(editor) {
  var lastLine = editor.getDoc().lastLine();
  for (var i = 0; i <= lastLine; ++i) {
    const firstPrefix = findFirstPrefix(editor, i);
    if (firstPrefix != null && firstPrefix >= 0) {
      return i;
    }
  }
}

export function findFirstPrefix(editor, line: number, startFromCharIndex = 0, lineText?: string) {
  if (!lineText) lineText = editor.getDoc().getLine(line);
  lineText = lineText.toUpperCase();
  const charIndex = lineText.indexOf(PREFIX_KEYWORD, startFromCharIndex);
  if (charIndex >= 0) {
    const tokenType = editor.getTokenTypeAt(CodeMirror.Pos(line, charIndex + 1));
    if (tokenType === "keyword") {
      return charIndex;
    }
  }
}
export default function (editor, start) {
  var line = start.line,
    lineText = editor.getDoc().getLine(line);

  // var startCh, tokenType;

  function hasPreviousPrefix() {
    var hasPreviousPrefix = false;
    for (var i = line - 1; i >= 0; i--) {
      if (editor.getDoc().getLine(i).toUpperCase().indexOf(PREFIX_KEYWORD) >= 0) {
        hasPreviousPrefix = true;
        break;
      }
    }

    return hasPreviousPrefix;
  }

  var getLastPrefixPos = function (line: number, ch: number) {
    var prefixKeywordToken = editor.getTokenAt(CodeMirror.Pos(line, ch + 1));
    if (!prefixKeywordToken || prefixKeywordToken.type != "keyword") return -1;
    var prefixShortname = TokenUtils.getNextNonWsToken(editor, line, prefixKeywordToken.end + 1);
    if (!prefixShortname || prefixShortname.type != "string-2") return -1; //missing prefix keyword shortname
    var prefixUri = TokenUtils.getNextNonWsToken(editor, line, prefixShortname.end + 1);
    if (!prefixUri || prefixUri.type != "variable-3") return -1; //missing prefix uri
    return prefixUri.end;
  };

  //only use opening prefix declaration
  if (hasPreviousPrefix()) return;
  var prefixStart = findFirstPrefix(editor, line, start.ch, lineText);

  if (prefixStart == null) return;
  var stopAt = "{"; //if this char is there, we won't have a chance of finding more prefixes
  var stopAtNextLine = false;
  var lastLine = editor.getDoc().lastLine(),
    endCh;
  var prefixEndChar = getLastPrefixPos(line, prefixStart);
  var prefixEndLine = line;

  // outer:
  for (var i = line; i <= lastLine; ++i) {
    if (stopAtNextLine) break;
    var text = editor.getDoc().getLine(i),
      pos = i == line ? prefixStart + 1 : 0;

    for (;;) {
      if (!stopAtNextLine && text.indexOf(stopAt) >= 0) stopAtNextLine = true;

      var nextPrefixDeclaration = text.toUpperCase().indexOf(PREFIX_KEYWORD, pos);

      if (nextPrefixDeclaration >= 0) {
        if ((endCh = getLastPrefixPos(i, nextPrefixDeclaration)) > 0) {
          prefixEndChar = endCh;
          prefixEndLine = i;
          pos = prefixEndChar;
        }
        pos++;
      } else {
        break;
      }
    }
  }
  return {
    from: CodeMirror.Pos(line, prefixStart + PREFIX_KEYWORD.length),
    to: CodeMirror.Pos(prefixEndLine, prefixEndChar),
  };
}
