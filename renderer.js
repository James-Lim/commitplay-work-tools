// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const TabGroup = require("electron-tabs");
const {remote, shell} = require('electron')
const electronLocalshortcut = require('electron-localshortcut');

let tabGroup = new TabGroup({
});

let asana = tabGroup.addTab({
    title: "Asana",
    src: "https://app.asana.com/0/688262246112806/list",
    visible: true,
    active: true,
    closable: false
});

let mail = tabGroup.addTab({
    title: "Mail",
    src: "https://mail.commitplay.io",
    visible: true,
    active: false,
    closable: false
});


let slack = tabGroup.addTab({
    title: "Slack",
    src: "https://commitplay.slack.com",
    visible: true,
    active: false,
    closable: false
});

let calendar = tabGroup.addTab({
    title: "Calendar",
    src: "https://calendar.commitplay.io",
    visible: true,
    active: false,
    closable: false
});

let drive = tabGroup.addTab({
    title: "Drive",
    src: "https://drive.commitplay.io",
    visible: true,
    active: false,
    closable: false
});

let pingboard = tabGroup.addTab({
    title: "Pingboard",
    src: "https://commitplay.pingboard.com",
    visible: true,
    active: false,
    closable: false
});

let groups = tabGroup.addTab({
    title: "Groups",
    src: "https://groups.commitplay.io",
    visible: true,
    active: false,
    closable: false
});

let responsibilityMap = tabGroup.addTab({
    title: "Responsibilities",
    src: "https://app.asana.com/0/688867783724848/board",
    visible: true,
    active: false,
    closable: false
});

let nextTab;
const goToNextTab = () => {
    nextTab = tabGroup.getNextTab();
    if(!nextTab) {
	nextTab = tabGroup.getTabByPosition(1);
    }
    nextTab.activate();
}

let prevTab;
const goToPrevTab = () => {
    prevTab = tabGroup.getPreviousTab();
    if(!prevTab) {
	prevTab = tabGroup.getTabByPosition(-1);
    }
    prevTab.activate();
}

const goToTabByPosition = (position) => () => {
    tabGroup.getTabByPosition(position).activate();
}

tabGroup.getTabs().forEach(tab => {
  tab.webview.addEventListener('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    alert(url);
    console.log(event)
    shell.openExternal(event.url);
  });
});

let win = remote.getCurrentWindow()
electronLocalshortcut.register(win, 'Ctrl+Tab', goToNextTab);
electronLocalshortcut.register(win, 'Ctrl+Shift+Tab', goToPrevTab);
electronLocalshortcut.register(win, 'CmdOrCtrl+1', goToTabByPosition(1));
electronLocalshortcut.register(win, 'CmdOrCtrl+2', goToTabByPosition(2));
electronLocalshortcut.register(win, 'CmdOrCtrl+3', goToTabByPosition(3));
electronLocalshortcut.register(win, 'CmdOrCtrl+4', goToTabByPosition(4));
electronLocalshortcut.register(win, 'CmdOrCtrl+5', goToTabByPosition(5));
electronLocalshortcut.register(win, 'CmdOrCtrl+6', goToTabByPosition(6));
electronLocalshortcut.register(win, 'CmdOrCtrl+7', goToTabByPosition(7));
electronLocalshortcut.register(win, 'CmdOrCtrl+8', goToTabByPosition(8));
electronLocalshortcut.register(win, 'CmdOrCtrl+9', goToTabByPosition(9));
electronLocalshortcut.register(win, 'CmdOrCtrl+0', goToTabByPosition(-1));
electronLocalshortcut.register(win, 'CmdOrCtrl+PageUp', goToPrevTab);
electronLocalshortcut.register(win, 'CmdOrCtrl+PageDown', goToNextTab);
