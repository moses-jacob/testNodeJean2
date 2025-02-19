"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testtrigger = testtrigger;
const functions_1 = require("@azure/functions");
async function testtrigger(request, context) {
    context.log(`Http function processed request for url "${request.url}"`);
    const name = request.query.get('name') || await request.text() || 'world';
    return { body: `Hello, ${name}!` };
}
;
functions_1.app.http('testtrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: testtrigger
});
//# sourceMappingURL=testtrigger.js.map