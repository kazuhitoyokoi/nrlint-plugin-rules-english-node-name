module.exports = {
    "english-node-name": {
        meta: {
            type: "suggestion",
            severity: "warn",
            docs: {
                description: "全てのノードの名前を英語のみにする"
            }
        },
        create: function (context, ruleConfig) {
            return {
                "node": function (node) {
                    if (!node.config.name.match(/^[ -~]+$/)) {
                        context.report({
                            location: [node.id],
                            message: "ノード名は英数字、または記号である必要があります"
                        })
                    }
                }
            }
        }
    }
};
