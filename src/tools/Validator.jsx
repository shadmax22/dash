export default function Validator(code, lang) {
  const ValidatorEngine = {
    xhtml: xhtmlParse,
  };

  return ValidatorEngine[lang] ?? false ? ValidatorEngine[lang](code) : code;
}

function xhtmlParse(xhtmlString) {
  let Errors = null;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xhtmlString, "application/xhtml+xml");

    const parseErrors = doc.getElementsByTagName("parsererror");

    if (parseErrors.length > 0) {
      Errors = "XHTML validation `error: " + parseErrors[0].textContent;
      return Errors;
    }

    const doctypeDeclaration = doc.doctype;
    if (
      !doctypeDeclaration ||
      doctypeDeclaration.name !== "html" ||
      doctypeDeclaration.publicId !== "-//W3C//DTD XHTML 1.1//EN" ||
      doctypeDeclaration.systemId !==
        "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
    ) {
      Errors = "XHTML validation error: Incorrect <!DOCTYPE> declaration";
      return Errors;
    }

    const htmlElement = doc.getElementsByTagName("html")[0];
    if (
      !htmlElement ||
      htmlElement.namespaceURI !== "http://www.w3.org/1999/xhtml"
    ) {
      Errors = "XHTML validation error: Missing or incorrect <html> element";
      return Errors;
    }

    return xhtmlString;
  } catch (error) {
    Errors = "Error validating XHTML: " + error;
    return Errors;
  }
}
