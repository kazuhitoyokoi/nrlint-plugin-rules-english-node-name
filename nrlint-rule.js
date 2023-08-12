module.export = (RED) => {
    RED.plugins.registerPlugin('nrlint-plugin-rules-english-node-name', {
        settings: {
            "*": { exportable: true }
        }
    });
};
