const js_thml = () => {
	let code = "";
	code += "<div class=\"float-contact\">\n";
	code += "	\n";
	code += "\t<div class=\"face\">\n";
	code += "\t\t<a href=\"https://www.facebook.com/donghung2004\" target=\"blank\">\n";
	code += "\t\t\t<img alt=\"facebook\" src=\"https://i.ibb.co/Th9gxCR/symbole-messager-orange.png\" style=\"width: 40px; height: 40px;\" />\n";
	code += "\t\t</a>\n";
	code += "\t</div>\n";
	code += "\n";
	code += "\t<div class=\"zalo\">\n";
	code += "\t\t<a href=\"https://zalo.me/1860184671555413972\" target=\"blank\">\n";
	code += "\t\t\t<img alt=\"zalo\" src=\"https://i.ibb.co/MG4T4P6/zalo-1-logo-svg-vector.png\" style=\"width: 40px; height: 40px;\" />\n";
	code += "\t\t</a>\n";
	code += "\t</div>\n";
	code += "\n";
	code += "\t<div class=\"hotline\">\n";
	code += "\t\t<a href=\"tel:0984022099\">\n";
	code += "\t\t\t<img alt=\"hotline\" src=\"https://i.ibb.co/X3c77tZ/46854.png\" style=\"width: 40px; height: 40px;\" />\n";
	code += "\t\t</a>\n";
	code += "\t</div>\n";
	code += "</div>\n";
	code += "\n";
	code += "\n";
	code += "<style type=\"text/css\">\n";
	code += "@media (min-width: 1025px) {\n";
	code += ".float-contact {\n";
	code += "\tposition: fixed;\n";
	code += "\tbottom: 40px;\n";
	code += "\tright: 40px;\n";
	code += "\tz-index: 99999;\n";
	code += "\ttext-align: left;\n";
	code += "}\n";
	code += ".hotline, .zalo, .face {\n";
	code += "\toverflow: hidden;\n";
	code += "\tborder: none !important;\n";
	code += "\tbackground: none !important;\n";
	code += "}   \n";
	code += ".hotline a, .zalo a, .face a {\n";
	code += "\tdisplay: block;\n";
	code += "\tmargin-bottom: 6px;\n";
	code += "}\n";
	code += ".hotline a img, .zalo a img, .face a img {\n";
	code += "\tdisplay: block;\n";
	code += "\tmargin: auto;\n";
	code += "}\n";
	code += ".hotline a, .zalo a, .face a {\n";
	code += "\tcolor: #000;\n";
	code += "\ttext-align: center;\n";
	code += "\tdisplay: block;\n";
	code += "\tfont-size: 10px;\n";
	code += "}   \n";
	code += "}\n";
	code += "\n";
	code += "@media (max-width: 1024px) {\n";
	code += ".float-contact {\n";
	code += "\tposition: fixed;\n";
	code += "\tbottom: 0px;\n";
	code += "\tz-index: 99999;\n";
	code += "\tdisplay: flex;\n";
	code += "\tbackground: linear-gradient(#fff,#137b00);\n";
	code += "\twidth: 100%;\n";
	code += "\theight: 63px;\n";
	code += "}\n";
	code += ".face, .zalo, .hotline {\n";
	code += "\twidth: 25%;\n";
	code += "\ttext-align: center;\n";
	code += "\tmargin: auto;\n";
	code += "\tborder-left: 1px solid #fff;\n";
	code += "\tborder-right: 1px solid #fff;\n";
	code += "}\n";
	code += ".face a img, .zalo a img, .hotline a img {\n";
	code += "\tdisplay: block;\n";
	code += "\tmargin: 5px auto 5px;\n";
	code += "}\n";
	code += ".face a, .zalo a, .hotline a {\n";
	code += "\tcolor: #fff;\n";
	code += "\tfont-size: 13px;\n";
	code += "}\n";
	code += "\n";
	code += "}\n";
	code += "</style>\n";
	code += "\n";
	return code;
}


document.getElementById("js_html").innerText = js_thml();
document.getElementById("html-text").value = js_thml();
