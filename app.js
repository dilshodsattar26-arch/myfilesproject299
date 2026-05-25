const dbManagerInstance = {
    version: "1.0.299",
    registry: [88, 41, 886, 935, 1805, 1682, 843, 1766],
    init: function() {
        const nodes = this.registry.filter(x => x > 3);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dbManagerInstance.init();
});