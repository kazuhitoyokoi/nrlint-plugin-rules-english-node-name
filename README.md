# nrlint-plugin-rules-english-node-name
英語のノード名のみ許可するフローリンター用のカスタムルール

Node-REDフローエディタにインストールすると、以下のように英語のノード名でない場合に、警告を表示します。

![](https://github.com/kazuhitoyokoi/nrlint-plugin-rules-english-node-name/blob/main/editor.png)

グローバルメンバでフロー開発を行うプロジェクトにて、日本メンバに日本語を使ってほしくない場合に便利です。

## フローエディタへのインストール方法
1. Node-REDのホームディレクトリへ移動
```
cd ~/.node-red
```

2. フローリンターをインストール
```
npm install nrlint
```

3. カスタムルールをインストール
```
npm install nrlint-plugin-rules-english-node-name
```

4. Node-REDを起動
```
node-red
```

### CLI版フローリンターでの利用方法

1. フローリンターをインストール
```
npm install -g nrlint
```

2. カスタムルールをインストール
```
npm install -g nrlint-plugin-rules-english-node-name
```

3. 下記を設定ファイル`.nrlintrc.js`に記載
```
module.exports = {
    "plugins": [
        "nrlint-plugin-rules-english-node-name"
    ],
    "rules": {
        "english-node-name": true
    }
}
```

4. CLI版フローリンターを実行
```
nrlint flows.json
```
-> flows.json内のノードに日本語の名前を付けていると、以下の様な警告メッセージが出力される
```
╔══════════════════╤══════════╤══════════════════════════════════════════════════╤═══════════════════╗
║ Object ID        │ Severity │ Message                                          │ Rule              ║
╟──────────────────┼──────────┼──────────────────────────────────────────────────┼───────────────────╢
║ 33cf4f761bc66b31 │ warn     │ ノード名は英数字、または記号である必要があります         │ english-node-name ║
╚══════════════════╧══════════╧══════════════════════════════════════════════════╧═══════════════════╝
✖ 1 problems (0 errors, 1 warnings)
```
