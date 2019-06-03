console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(s, ...args) {
    var str = s[0];
    for (var i = 0; i < args.length; i++) {
        str = str + escape(args[i]) + s[i + 1];
    };
    return str;
}

function escape(char) {
    return char.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/'/g, "&apos;")
		.replace(/"/g, "&quot;");
};
