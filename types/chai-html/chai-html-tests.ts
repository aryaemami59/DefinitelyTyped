// tests taken from https://www.npmjs.com/package/chai-html

import { expect, use } from "chai";
import chaiHtml from "chai-html";

use(chaiHtml);

expect("<div><img /></div>").html.to.equal("<div><img></div>");
expect("<h1>Hello World!</h1>").html.to.not.equal("<h1>Hallo Welt!</h1>");

expect("<div><!--Comment--></div>").html.ignoringComments.to.equal("<div></div>");
