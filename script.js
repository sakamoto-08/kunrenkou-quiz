"use strict";

// クイズの問題、選択肢、正解、解説をまとめます。
const quizData = [
  {
    question:
      "生成AI（ジェネレイティブAI）の説明として、最も適切なものはどれですか？",
    choices: [
      "既存のデータを分類するだけのAI",
      "データから新しいコンテンツを生成するAI",
      "コンピューターの故障を自動で修理するAI",
      "インターネット上の情報を保存するAI",
    ],
    answer: "データから新しいコンテンツを生成するAI",
    explanation:
      "生成AIは、学習したデータをもとに、文章・画像・音声・動画などの新しいコンテンツを生成できるAIです。",
  },
  {
    question:
      "ChatGPTなどのLLM（大規模言語モデル）が得意とする代表的なインターフェースと、主なアウトプットはどれですか？",
    choices: [
      "会話形式で、文章を生成する",
      "表計算形式で、画像だけを生成する",
      "音声通話形式で、プログラムだけを生成する",
      "メール形式で、動画だけを生成する",
    ],
    answer: "会話形式で、文章を生成する",
    explanation:
      "ChatGPTなどのLLMは、人間と会話するような形式で指示を受け、文章の作成・要約・翻訳などを行うことが得意です。",
  },
  {
    question: "プロンプトの精度を高めるために、特に重要な要素はどれですか？",
    choices: [
      "文章をできるだけ長くすること",
      "難しい専門用語を多く使うこと",
      "具体性と目的を明確にすること",
      "指示をできるだけ曖昧にすること",
    ],
    answer: "具体性と目的を明確にすること",
    explanation:
      "「何をしてほしいのか」「何のために使うのか」を具体的に伝えることで、AIが目的を理解しやすくなり、期待する回答に近づきます。",
  },
  {
    question:
      "プロンプトに「ペルソナ（役割）」や「ターゲット」を設定すると、何をコントロールしやすくなりますか？",
    choices: [
      "パソコンの処理速度",
      "AIの学習データ",
      "文章の文体や専門性",
      "インターネットの通信速度",
    ],
    answer: "文章の文体や専門性",
    explanation:
      "「初心者向け」「専門家として」「経営者向け」などと指定することで、読み手に合わせた文体や専門知識のレベルを調整できます。",
  },
  {
    question:
      "生成AIが事実とは異なる情報を、あたかも正しいかのように出力する現象を何と呼びますか？",
    choices: [
      "オートメーション",
      "ハルシネーション",
      "シミュレーション",
      "アニメーション",
    ],
    answer: "ハルシネーション",
    explanation:
      "ハルシネーションとは、生成AIが事実ではない情報や存在しない情報を、もっともらしく生成してしまう現象です。",
  },
  {
    question:
      "プロンプトに参考情報を与えたり、指示を段階的に与えたりする主なメリットは何ですか？",
    choices: [
      "AIの回答を必ず短くできる",
      "AIの動作速度を必ず上げられる",
      "回答の精度を高めやすくなる",
      "インターネット接続が不要になる",
    ],
    answer: "回答の精度を高めやすくなる",
    explanation:
      "必要な情報や手順を具体的に示すことで、AIが依頼内容を理解しやすくなり、目的に合った回答を得やすくなります。",
  },
  {
    question:
      "1回のプロンプトで希望通りの回答が得られなかった場合、どのように対応するのが適切ですか？",
    choices: [
      "すぐにAIの使用をやめる",
      "同じ指示を何度も入力する",
      "修正してほしい点を具体的に伝える",
      "AIに何も伝えず自分で最初から作る",
    ],
    answer: "修正してほしい点を具体的に伝える",
    explanation:
      "対話型AIでは、「もっと初心者向けに」「文章を短く」など、改善したいポイントを伝えることで回答を調整できます。",
  },
  {
    question:
      "生成された文章を、特定の読者層に合わせて調整する工程を何と呼びますか？",
    choices: ["内容最適化", "データ圧縮", "自動翻訳", "ファイル変換"],
    answer: "内容最適化",
    explanation:
      "読者の知識レベルや目的に合わせて、表現・情報量・専門性などを調整することを内容最適化といいます。",
  },
  {
    question:
      "「箇条書きで出力してください」「表形式で整理してください」と指定する主な目的は何ですか？",
    choices: [
      "AIの学習データを変更するため",
      "出力の構造や見やすさを整えるため",
      "AIの回答速度を上げるため",
      "インターネット検索を停止するため",
    ],
    answer: "出力の構造や見やすさを整えるため",
    explanation:
      "出力形式を指定することで、情報を整理された状態で受け取ることができ、内容を確認・利用しやすくなります。",
  },
  {
    question:
      "プロンプトで出力例や制約条件などの明確なフォーマットをあらかじめ指定するのはなぜですか？",
    choices: [
      "出力のブレを減らすため",
      "AIの学習データを削除するため",
      "パソコンの容量を増やすため",
      "AIを強制的に再起動するため",
    ],
    answer: "出力のブレを減らすため",
    explanation:
      "「この形式で出力してください」と具体的に指定することで、毎回異なる形式になることを抑え、期待する形に近い出力を得やすくなります。",
  },
  {
    question:
      "同じプロンプトを入力しても、生成AIから毎回少しずつ異なる回答が生成されることがあるのはなぜですか？",
    choices: [
      "AIが入力内容を毎回忘れるため",
      "生成の仕組みにランダム性が含まれるため",
      "パソコンの画面サイズが変わるため",
      "インターネットの文字数制限が変わるため",
    ],
    answer: "生成の仕組みにランダム性が含まれるため",
    explanation:
      "生成AIでは、回答を生成する際のパラメータ設定などによって、同じ指示でも表現や内容が少し変化する場合があります。",
  },
  {
    question:
      "複雑で工程の多いタスクをAIに依頼する場合、精度を高めるために効果的な方法はどれですか？",
    choices: [
      "すべてを一文だけで曖昧に指示する",
      "指示をできるだけ短くする",
      "作業を手順ごとに分けて指示する",
      "AIに目的を伝えない",
    ],
    answer: "作業を手順ごとに分けて指示する",
    explanation:
      "複雑な作業を複数のステップに分けて指示すると、AIが処理すべき内容を整理しやすくなります。",
  },
  {
    question:
      "生成AIが出力した文章をそのまま仕事で利用し、ファクトチェック（事実確認）を行わなかった場合、どのようなリスクがありますか？",
    choices: [
      "必ず文章が短くなる",
      "誤情報が混在する可能性がある",
      "AIが使用できなくなる",
      "パソコンが自動的に停止する",
    ],
    answer: "誤情報が混在する可能性がある",
    explanation:
      "生成AIは正しい情報だけを出力するとは限りません。仕事で利用する場合は、重要な情報について事実確認を行うことが大切です。",
  },
  {
    question:
      "AIに長文の要約を依頼した場合、元の文章と比べて出力結果は一般的にどうなりますか？",
    choices: [
      "内容が短く整理される",
      "必ず元の文章より長くなる",
      "文章がすべて画像になる",
      "内容が必ず完全に同じになる",
    ],
    answer: "内容が短く整理される",
    explanation:
      "要約とは、元の文章から重要な情報を取り出し、内容を短く整理することです。",
  },
  {
    question:
      "「小学生でもわかるように」「専門家向けに」とプロンプトで指定することで、何を調整できますか？",
    choices: [
      "説明の難易度",
      "パソコンの画面サイズ",
      "AIの学習期間",
      "インターネットの速度",
    ],
    answer: "説明の難易度",
    explanation:
      "対象者を指定することで、使う言葉や説明の詳しさ、専門用語の量などを調整できます。",
  },
  {
    question:
      "「よい文章を書いて」のような曖昧な指示ではなく、具体例を提示する「Few-shotプロンプト」の目的は何ですか？",
    choices: [
      "AIの回答を完全にランダムにするため",
      "出力の方向性を具体化するため",
      "AIの利用時間を制限するため",
      "AIの学習データを削除するため",
    ],
    answer: "出力の方向性を具体化するため",
    explanation:
      "具体例を見せることで、AIに「どのような形式・表現にしてほしいのか」を伝えやすくなります。",
  },
  {
    question:
      "AIが出力した回答の特定の文言やトーンを直したい場合、追加のプロンプトではどのように指示するのが適切ですか？",
    choices: [
      "「なんとなく直してください」とだけ伝える",
      "AIにすべて任せる",
      "修正したいポイントを具体的に伝える",
      "元の回答をすべて削除するよう指示する",
    ],
    answer: "修正したいポイントを具体的に伝える",
    explanation:
      "「もっと柔らかい表現にする」「この部分を短くする」など、具体的な修正内容を伝えることで、意図に近い修正ができます。",
  },
  {
    question:
      "AIとの対話をスムーズに進め、質の高い回答を得るために、業務の開始時に特に時間をかけるべき作業は何ですか？",
    choices: [
      "AIの画面デザインを変更する",
      "最初のプロンプトを設計する",
      "同じ質問を何度も送信する",
      "回答をすべて手作業で入力する",
    ],
    answer: "最初のプロンプトを設計する",
    explanation:
      "目的・条件・対象者・出力形式などを最初に整理して指示することで、その後のやり取りを効率化しやすくなります。",
  },
  {
    question:
      "業務効率化において、ゼロから自分で文章を作るのではなく、AIをどのように活用するのが効率的ですか？",
    choices: [
      "AIに完成品をすべて任せて確認しない",
      "AIに下書きを作成させ、人間が編集する",
      "AIには何も情報を与えない",
      "AIの出力をすべて削除する",
    ],
    answer: "AIに下書きを作成させ、人間が編集する",
    explanation:
      "AIに下書きを作成させ、それを人間が確認・修正することで、作業時間を短縮しながら品質を管理できます。",
  },
  {
    question:
      "ExcelやGoogleスプレッドシートの業務を生成AIで効率化する際、AIに作成・提案させられる代表的なものはどれですか？",
    choices: [
      "関数やオートフィルターなどの操作方法",
      "パソコンの電源ボタン",
      "モニターの明るさ",
      "キーボードの物理的な配置",
    ],
    answer: "関数やオートフィルターなどの操作方法",
    explanation:
      "生成AIを使うことで、目的に合った関数の作成や、表計算ソフトでのデータ整理方法などを提案してもらえます。",
  },
  {
    question:
      "生成AIに任せるタスクと、人間が担う役割の分担として最も適切なものはどれですか？",
    choices: [
      "すべての判断をAIに任せる",
      "AIは一切使わず、すべて人間が行う",
      "定型業務や下書き生成をAIに任せ、最終判断は人間が行う",
      "重要な判断だけをAIに任せる",
    ],
    answer: "定型業務や下書き生成をAIに任せ、最終判断は人間が行う",
    explanation:
      "AIが得意な作業を任せながら、人間が内容を確認し、最終的な判断や責任を担うことが重要です。",
  },
  {
    question:
      "生成AIが事実無根の情報を出力するハルシネーションが起きた場合、文章にはどのような特徴が見られることがありますか？",
    choices: [
      "必ず意味のない単語だけになる",
      "文章が必ず途中で終わる",
      "もっともらしい文脈やトーンで生成される",
      "必ず「これは嘘です」と表示される",
    ],
    answer: "もっともらしい文脈やトーンで生成される",
    explanation:
      "ハルシネーションの注意点は、間違った情報でも自然で説得力のある文章として出力される場合があることです。",
  },
  {
    question:
      "生成AIをビジネスで安全に活用するために、コンプライアンスや法的リスクの観点から行うべきことはどれですか？",
    choices: [
      "AIの回答はすべて自由に利用できると考える",
      "利用規約や著作権などを確認して使用する",
      "インターネット上の情報はすべて無条件で利用する",
      "AIが生成したものは必ず人間より正しいと考える",
    ],
    answer: "利用規約や著作権などを確認して使用する",
    explanation:
      "生成AIを仕事で利用する場合は、サービスの利用規約や著作権、個人情報、社内ルールなどを確認し、安全に利用することが重要です。",
  },
];

// Photoshop・Illustratorのクイズデータです。
const photoshopIllustratorQuizData = [
  {
    question:
      "Photoshopで元の画像を破壊（消去）せずに、指定した範囲だけを表示または非表示にするための機能は何ですか？",
    choices: [
      "レイヤーマスク",
      "スマートオブジェクト",
      "ヒストグラム",
      "カラーモード",
    ],
    answer: "レイヤーマスク",
    explanation:
      "レイヤーマスクを使うと、元の画像データを直接削除せずに、指定した部分を表示・非表示にできます。後からマスクを編集できるため、非破壊編集に適しています。",
  },
  {
    question:
      "Illustrator（またはPhotoshopのパス操作）で、オブジェクトのアンカーポイントやセグメントを個別に選択・移動・変形するためのツールは何ですか？",
    choices: [
      "選択ツール",
      "ダイレクト選択ツール",
      "ペンツール",
      "手のひらツール",
    ],
    answer: "ダイレクト選択ツール",
    explanation:
      "ダイレクト選択ツールは、オブジェクト全体ではなく、アンカーポイントやセグメントを個別に選択して編集するためのツールです。Illustratorでは白い矢印のアイコンで表示されます。",
  },
  {
    question:
      "IllustratorやPhotoshopで「新規ドキュメント（ファイルの作成）」を行うためのショートカットキーは何ですか？",
    choices: ["Ctrl + S", "Ctrl + O", "Ctrl + N", "Ctrl + P"],
    answer: "Ctrl + N",
    explanation:
      "Ctrl + Nは、新規ドキュメントを作成するためのショートカットキーです。MacではCommand + Nが使用されます。",
  },
  {
    question:
      "キャンバスやアートボード上に文字（テキスト）を入力・編集するために使用する基本ツールは何ですか？",
    choices: [
      "ペンツール",
      "シェイプツール",
      "テキストツール",
      "グラデーションツール",
    ],
    answer: "テキストツール",
    explanation:
      "テキストツールは、キャンバスやアートボード上に文字を入力したり、文字の内容や設定を編集したりするための基本的なツールです。Tのアイコンで表示されます。",
  },
  {
    question:
      "Photoshopでヒストグラムを確認しながら、画像の「シャドウ（黒点）」「中間調」「ハイライト（白点）」の明るさやコントラストを調整する色調補正機能は何ですか？",
    choices: [
      "レベル補正",
      "色相・彩度",
      "グラデーションマップ",
      "ぼかし（ガウス）",
    ],
    answer: "レベル補正",
    explanation:
      "レベル補正では、ヒストグラムを確認しながらシャドウ・中間調・ハイライトを調整できます。画像の明るさやコントラストを整える代表的な色調補正機能です。",
  },
  {
    question: "Photoshopでレイヤーマスクを使用する主な目的・利点は何ですか？",
    choices: [
      "画像の容量を必ず小さくする",
      "画像の一部を隠したり表示したりする",
      "画像を自動的に印刷する",
      "画像の解像度を自動的に上げる",
    ],
    answer: "画像の一部を隠したり表示したりする",
    explanation:
      "レイヤーマスクを使うと、画像の一部を非表示にしたり再び表示したりできます。元の画像を直接消去しないため、後から修正しやすいのが大きなメリットです。",
  },
  {
    question:
      "Photoshopのレイヤーマスク上で、マスク範囲を「黒色」で塗ったりブラシで描画したりすると、該当する部分の画像はどうなりますか？",
    choices: [
      "画像が明るくなる",
      "画像が拡大される",
      "その部分が隠れる",
      "画像が自動的に保存される",
    ],
    answer: "その部分が隠れる",
    explanation:
      "レイヤーマスクでは、基本的に「白」は表示、「黒」は非表示、「グレー」はその中間の透明度になります。そのため、黒で塗った部分は画像が隠れます。",
  },
  {
    question:
      "Photoshopの「スポット修復ブラシツール」や「パッチツール」は、どのような作業に適していますか？",
    choices: [
      "画像のサイズを大きくする作業",
      "シミやニキビ、不要な部分を自然に消すレタッチ",
      "新しい文字を入力する作業",
      "印刷用のカラーモードを設定する作業",
    ],
    answer: "シミやニキビ、不要な部分を自然に消すレタッチ",
    explanation:
      "スポット修復ブラシツールやパッチツールは、写真のシミ・ニキビ・不要な部分などを周囲の画像になじませながら修正するレタッチに使用します。",
  },
  {
    question:
      "Illustratorで作成したデータを印刷所に入稿する際、フォントの置き換わりを防ぐために行う処理は何ですか？",
    choices: [
      "画像をラスタライズする",
      "すべての文字をアウトライン化する",
      "画像をモノクロ化する",
      "ファイルをJPEGに変換する",
    ],
    answer: "すべての文字をアウトライン化する",
    explanation:
      "文字をアウトライン化すると、文字がフォントデータではなく図形として扱われます。そのため、印刷所の環境に同じフォントがなくても、フォントの置き換わりによる表示崩れを防ぎやすくなります。ショートカットはCtrl + Shift + Oです。",
  },
  {
    question:
      "Illustratorで、オブジェクトの塗りや線、効果（ドロップシャドウや変形など）の重なり順や設定を非破壊で管理・変更するためのパネルは何ですか？",
    choices: [
      "レイヤーパネル",
      "カラーパネル",
      "アピアランスパネル",
      "プロパティパネル",
    ],
    answer: "アピアランスパネル",
    explanation:
      "アピアランスパネルでは、オブジェクトの塗り・線・効果などの設定をまとめて管理できます。設定を追加・変更することで、元のオブジェクトを直接変更せずに見た目を調整できます。",
  },
  {
    question:
      "印刷物（チラシやポスターなど）のデザインを作成する際、カラーモードとして設定する代表的な表現形式は何ですか？",
    choices: ["RGB", "CMYK", "HSL", "HSV"],
    answer: "CMYK",
    explanation:
      "CMYKは、シアン（C）、マゼンタ（M）、イエロー（Y）、ブラック（K）の4色を使って色を表現する方式です。印刷物の制作で一般的に使用されます。",
  },
  {
    question:
      "IllustratorやPhotoshopの文字組み（タイポグラフィ）において、特定の文字と文字の「ペア間の間隔」を個別に調整する作業を何と呼びますか？",
    choices: ["トラッキング", "カーニング", "行送り", "インデント"],
    answer: "カーニング",
    explanation:
      "カーニングは、特定の文字と文字の組み合わせに対して、文字間の間隔を個別に調整する作業です。文字の見た目のバランスを整えるために使用します。",
  },
  {
    question:
      "Photoshopで、ドラッグした部分の露出（明るさ）を部分的に明るくするためのレタッチツールは何ですか？",
    choices: [
      "焼き込みツール",
      "覆い焼きツール",
      "スポンジツール",
      "ぼかしツール",
    ],
    answer: "覆い焼きツール",
    explanation:
      "覆い焼きツールは、画像の指定した部分を明るくするためのレタッチツールです。反対に、部分的に暗くする場合には焼き込みツールを使用します。",
  },
  {
    question:
      "Photoshopで作成中のレイヤー情報、マスク、パスなどの編集状態を保持したまま保存するための標準的なファイル形式は何ですか？",
    choices: ["JPEG形式", "PNG形式", "PSD形式", "GIF形式"],
    answer: "PSD形式",
    explanation:
      "PSDはPhotoshopの標準的なファイル形式です。レイヤー、レイヤーマスク、パスなどの編集情報を保持したまま保存できます。",
  },
  {
    question:
      "Photoshopのレイヤーを「スマートオブジェクト」に変換してからフィルターを適用する最大のメリットは何ですか？",
    choices: [
      "必ず画像の容量が小さくなる",
      "元の画像が自動的に削除される",
      "後からフィルターの設定を修正できる",
      "画像が自動的に印刷される",
    ],
    answer: "後からフィルターの設定を修正できる",
    explanation:
      "スマートオブジェクトにフィルターを適用すると、スマートフィルターとして扱うことができ、後からフィルターの設定を変更したり、非表示にしたりできます。元の画像データを保ちながら編集できる非破壊編集の方法です。",
  },
  {
    question:
      "Photoshopで、写真の露光量、色温度、明瞭度、テクスチャなどを包括的かつ直感的に調整できる高性能なフィルター機能は何ですか？",
    choices: [
      "Camera Rawフィルター",
      "シャープフィルター",
      "ノイズフィルター",
      "ぼかしフィルター",
    ],
    answer: "Camera Rawフィルター",
    explanation:
      "Camera Rawフィルターでは、露光量、色温度、コントラスト、ハイライト、シャドウ、明瞭度、テクスチャなど、写真の基本的な補正をまとめて調整できます。",
  },
];

// HTML基礎・セマンティックHTMLのクイズデータです。
const htmlQuizData = [
  {
    question:
      "HTMLで、終了タグを持たない「空要素」に該当するものはどれですか？",
    choices: ["<aside>", "<img>", "<article>", "<nav>"],
    answer: "<img>",
    explanation:
      "<img>は空要素のため、通常のHTML要素のように終了タグ（</img>）を記述しません。",
  },
  {
    question:
      "次のうち、終了タグを持たない「空要素」に該当するものはどれですか？",
    choices: ["<meta>", "<nav>", "<article>", "<li>"],
    answer: "<meta>",
    explanation:
      "<meta>はHTML文書のメタ情報を指定する空要素です。終了タグは記述しません。",
  },
  {
    question:
      "HTMLの<article>要素は、主にどのような内容を表すために使用しますか？",
    choices: [
      "ページ全体の装飾",
      "独立して完結できるコンテンツ",
      "画像のサイズ指定",
      "CSSファイルの読み込み",
    ],
    answer: "独立して完結できるコンテンツ",
    explanation:
      "<article>は、ブログ記事やニュース記事など、ページ内の他の部分から切り離しても独立した内容として成立するコンテンツを表します。",
  },
  {
    question:
      "<article>と<section>の使い分けとして、最も適切なものはどれですか？",
    choices: [
      "<article>は装飾、<section>は画像に使う",
      "<article>は独立したコンテンツ、<section>は内容のまとまりに使う",
      "<article>はCSS専用、<section>はJavaScript専用",
      "<article>と<section>には意味の違いがない",
    ],
    answer: "<article>は独立したコンテンツ、<section>は内容のまとまりに使う",
    explanation:
      "<article>は独立して成立するコンテンツを表し、<section>はテーマや内容ごとのまとまりを表すために使用します。",
  },
  {
    question:
      "ナビゲーションメニューのリンクをHTMLでリストとして構造化する場合、一般的に使用する組み合わせはどれですか？",
    choices: ["<ul>と<li>", "<table>と<tr>", "<div>と<span>", "<p>と<br>"],
    answer: "<ul>と<li>",
    explanation:
      "複数のナビゲーション項目を箇条書きのリストとして表現する場合、<ul>の中に<li>を配置する構造が一般的です。",
  },
  {
    question: "<nav>要素を使用する主な目的は何ですか？",
    choices: [
      "画像を表示するため",
      "主要なナビゲーションリンクのまとまりを示すため",
      "文字を太字にするため",
      "ページの背景色を変更するため",
    ],
    answer: "主要なナビゲーションリンクのまとまりを示すため",
    explanation:
      "<nav>は、サイト内の主要なナビゲーションリンクなど、ページ移動に関係するリンクのまとまりを表します。",
  },
  {
    question:
      "CSSで<ul>などのリストの先頭に表示される「・」などを非表示にするプロパティはどれですか？",
    choices: ["text-decoration", "list-style", "font-style", "display-text"],
    answer: "list-style",
    explanation:
      "list-styleプロパティを使用すると、リストマーカーの種類や表示・非表示などを設定できます。例えば「list-style: none;」でマーカーを非表示にできます。",
  },
  {
    question:
      "HTMLとCSSの基本的な役割の組み合わせとして、最も適切なものはどれですか？",
    choices: [
      "HTMLは見た目、CSSはデータ保存",
      "HTMLは構造、CSSは見た目やレイアウト",
      "HTMLは画像編集、CSSは動画編集",
      "HTMLは通信、CSSはサーバー管理",
    ],
    answer: "HTMLは構造、CSSは見た目やレイアウト",
    explanation:
      "HTMLは文章やコンテンツの構造・意味を表し、CSSは色・文字・余白・レイアウトなどの見た目を整える役割があります。",
  },
  {
    question: "セマンティックHTMLとは、どのようなHTMLですか？",
    choices: [
      "見た目だけを重視したHTML",
      "要素の意味や役割を適切に表現するHTML",
      "CSSを使わないHTML",
      "JavaScriptだけで作られたHTML",
    ],
    answer: "要素の意味や役割を適切に表現するHTML",
    explanation:
      "セマンティックHTMLとは、<header>、<nav>、<main>、<article>など、コンテンツの意味や役割に合ったHTML要素を使用することです。",
  },
  {
    question:
      "セマンティックHTMLがアクセシビリティ（誰でも利用しやすくすること）に役立つ理由として、最も適切なものはどれですか？",
    choices: [
      "必ずページの読み込み速度が10倍になるため",
      "HTMLの意味が支援技術などに伝わりやすくなるため",
      "CSSが不要になるため",
      "画像の画質が向上するため",
    ],
    answer: "HTMLの意味が支援技術などに伝わりやすくなるため",
    explanation:
      "適切なHTML要素を使うことで、スクリーンリーダーなどの支援技術がページの構造や役割を理解しやすくなります。",
  },
  {
    question:
      "Webページの「お問い合わせフォーム」へのリンクを配置する場合、内容に適したHTML要素を選ぶ考え方として正しいものはどれですか？",
    choices: [
      "何でも<div>で作ればよい",
      "内容や役割に合った意味のあるHTML要素を選ぶ",
      "すべて<img>で作る",
      "HTMLの要素は意味を考えず自由に選ぶ",
    ],
    answer: "内容や役割に合った意味のあるHTML要素を選ぶ",
    explanation:
      "HTMLでは、見た目だけでなくコンテンツの役割や意味に合った要素を選ぶことが重要です。これはアクセシビリティや保守性にもつながります。",
  },
  {
    question:
      "次のHTML構造のうち、Webページの意味や構造を適切に表現するものとして最も適切なのはどれですか？",
    choices: [
      "すべての内容を<div>だけで作る",
      "<nav>や<main>、<article>など、役割に合った要素を使用する",
      "すべての文章を<img>にする",
      "見た目だけでHTML要素を決める",
    ],
    answer: "<nav>や<main>、<article>など、役割に合った要素を使用する",
    explanation:
      "セマンティックHTMLでは、コンテンツの役割に応じたHTML要素を使ってページの構造を明確にします。これはアクセシビリティや保守性の向上にもつながります。",
  },
];

// SNS・Webマーケティングのクイズデータです。
const snsMarketingQuizData = [
  {
    question: "SNSとは何の略ですか？",
    choices: [
      "Social Network Service",
      "Social News System",
      "Search Network Service",
      "Social Navigation System",
    ],
    answer: "Social Network Service",
    explanation:
      "SNSは「Social Network Service」の略で、人と人とのつながりをインターネット上で作ったり、情報を発信・共有したりするサービスのことです。",
  },
  {
    question: "Instagramの「保存」が重要な理由は何ですか？",
    choices: [
      "ユーザーが後で見返したい価値のある投稿だと判断した可能性があるから",
      "Instagramの利用時間が自動的に長くなるから",
      "投稿者のフォロワー数が必ず増えるから",
      "投稿画像の画質が自動的に上がるから",
    ],
    answer:
      "ユーザーが後で見返したい価値のある投稿だと判断した可能性があるから",
    explanation:
      "保存は、ユーザーが「後で見返したい」と感じた投稿に対して行う行動です。保存される投稿は、ユーザーにとって有益な情報や参考になる情報を含んでいる可能性があります。",
  },
  {
    question:
      "Instagramのアルゴリズムで、特に重要な指標の組み合わせとして考えられるものはどれですか？",
    choices: [
      "保存数＋シェア数",
      "画面の明るさ＋音量",
      "スマートフォンの機種＋通信速度",
      "投稿者の年齢＋投稿時間",
    ],
    answer: "保存数＋シェア数",
    explanation:
      "Instagramでは、ユーザーが投稿を保存したり、他の人にシェアしたりする行動が、投稿への関心や価値を示す重要なシグナルの一つになります。",
  },
  {
    question: "Wix（ウィックス）とはどのようなサービスですか？",
    choices: [
      "ドラッグ＆ドロップなどでWebサイトを作成できるノーコードWebサイト作成サービス",
      "Webサイトの検索順位だけを確認するサービス",
      "SNSのフォロワーだけを管理するサービス",
      "画像編集だけを行うデザインソフト",
    ],
    answer:
      "ドラッグ＆ドロップなどでWebサイトを作成できるノーコードWebサイト作成サービス",
    explanation:
      "Wixは、コードをほとんど書かずに、文字や画像などの要素を配置してWebサイトを作成できるサービスです。ノーコードとは、プログラミングコードをほとんど使わずにサービスやWebサイトを作る方法です。",
  },
  {
    question: "SEOとは何のことですか？",
    choices: [
      "検索エンジン最適化",
      "SNS広告最適化",
      "Webデザイン最適化",
      "サーバー通信最適化",
    ],
    answer: "検索エンジン最適化",
    explanation:
      "SEOは「Search Engine Optimization」の略で、日本語では「検索エンジン最適化」といいます。Webサイトや記事を検索エンジンに理解されやすくし、検索結果から必要な情報を見つけてもらいやすくするための取り組みです。",
  },
  {
    question: "SEO対策を行う主な目的は何ですか？",
    choices: [
      "検索結果からWebサイトへの訪問者を増やすこと",
      "パソコンの処理速度を上げること",
      "SNSのアカウントを自動作成すること",
      "Webサイトの画像サイズを必ず小さくすること",
    ],
    answer: "検索結果からWebサイトへの訪問者を増やすこと",
    explanation:
      "SEOでは、ユーザーが検索したときに自分のWebサイトを見つけてもらいやすくすることが重要です。その結果、検索からの訪問者を増やすことにつながります。",
  },
  {
    question:
      "ビッグ・ミドル・スモールキーワードとは、何を基準に分類されたものですか？",
    choices: [
      "検索回数や競争の激しさ",
      "文字の大きさ",
      "Webサイトのページ数",
      "パソコンの画面サイズ",
    ],
    answer: "検索回数や競争の激しさ",
    explanation:
      "ビッグ・ミドル・スモールキーワードは、一般的に検索される回数や競争の激しさなどを基準として分類されます。検索回数が多いキーワードほど、競争が激しくなる傾向があります。",
  },
  {
    question: "KGIとKPIの関係性について、最も適切な説明はどれですか？",
    choices: [
      "KPIはKGIを達成するための中間的な指標",
      "KGIはKPIより小さな目標を表す指標",
      "KGIとKPIはまったく関係のない指標",
      "KPIはWebサイトのデザインだけを評価する指標",
    ],
    answer: "KPIはKGIを達成するための中間的な指標",
    explanation:
      "KGIは最終的に達成したい目標を示します。KPIは、そのKGIを達成するために途中の進捗を確認するための指標です。",
  },
  {
    question:
      "スマホ対応（モバイルフレンドリー）がSEOにおいて重要な理由は何ですか？",
    choices: [
      "Googleがモバイル版のサイトを重視して評価しているため",
      "スマートフォンでは検索エンジンを利用できないため",
      "パソコンからの検索が完全になくなったため",
      "スマホ対応すると必ず検索順位1位になるため",
    ],
    answer: "Googleがモバイル版のサイトを重視して評価しているため",
    explanation:
      "現在はスマートフォンからWebサイトを見るユーザーが多く、Googleもモバイル版のページを基準にWebサイトを評価する仕組みを採用しています。そのため、スマホで見やすく使いやすいサイトにすることが重要です。",
  },
  {
    question: "Instagramの「インサイト」とはどのような機能ですか？",
    choices: [
      "投稿やアカウントのパフォーマンスを分析できる機能",
      "写真を自動的に加工する機能",
      "フォロワーに自動でメッセージを送る機能",
      "Instagramのアカウントを削除する機能",
    ],
    answer: "投稿やアカウントのパフォーマンスを分析できる機能",
    explanation:
      "Instagramのインサイトでは、リーチ数、保存数、プロフィールへのアクセスなど、投稿やアカウントのパフォーマンスに関するデータを確認できます。",
  },
  {
    question: "Googleの評価指標「E-E-A-T」とは、何の頭文字ですか？",
    choices: [
      "Experience・Expertise・Authoritativeness・Trustworthiness",
      "Education・Experience・Accuracy・Technology",
      "Expertise・Efficiency・Access・Trust",
      "Experience・Evaluation・Authority・Technology",
    ],
    answer: "Experience・Expertise・Authoritativeness・Trustworthiness",
    explanation:
      "E-E-A-Tは「Experience（経験）」「Expertise（専門性）」「Authoritativeness（権威性）」「Trustworthiness（信頼性）」の頭文字です。Web上の情報がどの程度信頼できるものかを考える際の重要な概念です。",
  },
  {
    question:
      "GoogleがE-E-A-Tを重視する理由として、最も適切なものはどれですか？",
    choices: [
      "ユーザーに信頼できる情報を届けるため",
      "Webサイトのデザインを統一するため",
      "SNSの投稿数を増やすため",
      "インターネットの通信速度を上げるため",
    ],
    answer: "ユーザーに信頼できる情報を届けるため",
    explanation:
      "検索ユーザーが安心して情報を利用できるよう、経験や専門性、権威性、信頼性などを考慮することが重要です。",
  },
  {
    question:
      "検索順位が上がりやすい記事に見られる特徴として、最も適切なものはどれですか？",
    choices: [
      "検索意図を満たし、独自の経験や情報が含まれている",
      "とにかく文章量だけが多い",
      "同じキーワードを何度も繰り返している",
      "他のサイトの記事をそのままコピーしている",
    ],
    answer: "検索意図を満たし、独自の経験や情報が含まれている",
    explanation:
      "SEOでは、ユーザーが何を知りたいのかという検索意図を満たすことが重要です。また、実際の経験や独自の情報など、ユーザーにとって価値のある内容を提供することも重要です。",
  },
  {
    question: "SNSでフォロワーを増やすために、最も重要なことは何ですか？",
    choices: [
      "ターゲットにとって価値のある投稿を継続すること",
      "とにかく投稿数だけを増やすこと",
      "他のアカウントの投稿をコピーすること",
      "フォロワーを購入すること",
    ],
    answer: "ターゲットにとって価値のある投稿を継続すること",
    explanation:
      "SNSでは、誰に向けた発信なのかを明確にし、ターゲットにとって役立つ情報や興味を持ってもらえる内容を継続して発信することが重要です。",
  },
];

// DOM要素を取得して、画面を操作できるようにします。
const quizContainer = document.getElementById("quiz-container");
const quizTitleElement = document.getElementById("quiz-title");
const quizDescriptionElement = document.getElementById("quiz-description");
const questionNumberElement = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const explanationElement = document.getElementById("explanation");
const explanationTextElement = document.getElementById("explanation-text");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const accuracyElement = document.getElementById("accuracy");
const resultMessageElement = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const progressFillElement = document.getElementById("progress-fill");
const questionViewElement = document.getElementById("question-view");
const quizSelectButtons = document.querySelectorAll(".quiz-select-button");

// 現在のクイズ、問題、正解数、回答済み状態を管理します。
const quizTitles = {
  generator: "生成AI・プロンプト",
  photoshop: "Photoshop・Illustrator",
  html: "HTML基礎・セマンティックHTML",
  snsMarketing: "SNS・Webマーケティング",
};
const quizDescriptions = {
  generator: "AIの仕組みと安全な使い方をチェック",
  photoshop: "Photoshop・Illustratorの基本操作やデザイン知識を確認",
  html: "HTMLの基本・セマンティックHTML・アクセシビリティを確認",
  snsMarketing: "SNS・SEO・Webマーケティングの基本知識を確認",
};
let currentQuizKey = "generator";
let currentQuizData = quizData;
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;
let selectedAnswer = "";

// 問題を表示する処理です。
function showQuestion() {
  const currentQuestion = currentQuizData[currentQuestionIndex];
  isAnswered = false;
  selectedAnswer = "";

  quizTitleElement.textContent = quizTitles[currentQuizKey];
  quizDescriptionElement.textContent = quizDescriptions[currentQuizKey];
  questionNumberElement.textContent = `問題 ${currentQuestionIndex + 1} / ${currentQuizData.length}`;
  questionElement.textContent = currentQuestion.question;
  feedbackElement.hidden = true;
  feedbackElement.className = "feedback";
  explanationElement.hidden = true;
  explanationTextElement.textContent = "";
  nextButton.hidden = true;
  resultElement.hidden = true;
  questionViewElement.hidden = false;
  progressFillElement.style.width = `${((currentQuestionIndex + 1) / currentQuizData.length) * 100}%`;

  showChoices(currentQuestion.choices);
}

// 選択肢をボタンとして表示します。
function showChoices(choiceList) {
  choicesElement.replaceChildren();

  choiceList.forEach((choiceText, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.type = "button";
    choiceButton.className = "choice-button";
    choiceButton.dataset.letter = String.fromCharCode(65 + index);
    choiceButton.dataset.answer = choiceText;
    choiceButton.textContent = choiceText;
    choiceButton.setAttribute(
      "aria-label",
      `${String.fromCharCode(65 + index)}: ${choiceText}`,
    );
    choicesElement.appendChild(choiceButton);
  });
}

// 選択肢をクリックした時の回答を判定します。
function answerQuestion(event) {
  const choiceButton = event.target.closest(".choice-button");

  if (!choiceButton || isAnswered) {
    return;
  }

  isAnswered = true;
  selectedAnswer = choiceButton.dataset.answer;
  const currentQuestion = currentQuizData[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.answer;

  if (isCorrect) {
    score += 1;
  }

  showAnswerResult(isCorrect, currentQuestion);
}

// 正解・不正解を表示し、解説と次の問題ボタンを準備します。
function showAnswerResult(isCorrect, currentQuestion) {
  const choiceButtons = choicesElement.querySelectorAll(".choice-button");
  const correctButton = [...choiceButtons].find(
    (button) => button.dataset.answer === currentQuestion.answer,
  );
  const selectedButton = choicesElement.querySelector(
    `[data-answer="${CSS.escape(selectedAnswer)}"]`,
  );

  choiceButtons.forEach((button) => {
    button.disabled = true;
  });

  if (correctButton) {
    correctButton.classList.add("is-correct");
  }

  if (selectedButton && selectedButton !== correctButton) {
    selectedButton.classList.add("is-incorrect");
  }

  feedbackElement.hidden = false;
  feedbackElement.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedbackElement.textContent = isCorrect ? "正解！" : "不正解";
  explanationTextElement.textContent = currentQuestion.explanation;
  explanationElement.hidden = false;

  nextButton.hidden = false;
  nextButton.innerHTML =
    currentQuestionIndex === currentQuizData.length - 1
      ? '結果を見る <span aria-hidden="true">→</span>'
      : '次の問題 <span aria-hidden="true">→</span>';
  nextButton.focus();
}

// 次の問題へ進む処理です。
function moveToNextQuestion() {
  if (!isAnswered) {
    return;
  }

  if (currentQuestionIndex < currentQuizData.length - 1) {
    currentQuestionIndex += 1;
    showQuestion();
    questionElement.focus();
    return;
  }

  showResult();
}

// クイズ終了後のスコアと正答率を表示します。
function showResult() {
  const accuracy = Math.round((score / currentQuizData.length) * 100);
  const resultMessages =
    currentQuizKey === "generator"
      ? [
          "AIとの学習、次の一歩を進めましょう。",
          "基礎を確認できました。自分の回答を見直しましょう。",
          "かなり理解できています。実務でAIを活用してみてください。",
          "生成AIを安全に使う力がつきました。",
        ]
      : currentQuizKey === "html"
        ? [
            "HTMLの基礎を確認できました。",
            "セマンティックHTMLの理解が進みました。",
            "アクセシビリティの意識が身につきました。",
            "HTMLの構造をより深く理解できています。",
          ]
        : currentQuizKey === "snsMarketing"
          ? [
              "SNSの基本を確認できました。",
              "SNS・SEOの見方が少し理解できました。",
              "Webマーケティングの基礎を確認しました。",
              "SNS・Webマーケティングをより深く理解できています。",
            ]
          : [
              "Photoshop・Illustratorの基礎を確認できました。",
              "操作の理解が進みました。実際の制作で試してみてください。",
              "デザイン制作の知識が身につきています。",
              "Photoshop・Illustratorをより深く理解できています。",
            ];

  questionViewElement.hidden = true;
  resultElement.hidden = false;
  scoreElement.textContent = `${currentQuizData.length}問中 ${score}問正解`;
  accuracyElement.textContent = `正答率：${accuracy}%`;
  resultMessageElement.textContent =
    resultMessages[
      Math.min(Math.floor(accuracy / 25), resultMessages.length - 1)
    ];
  restartButton.focus();
}

// クイズを最初から再スタートします。
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  isAnswered = false;
  selectedAnswer = "";
  resultElement.hidden = true;
  nextButton.hidden = true;
  showQuestion();
  questionElement.focus();
}

// クイズを切り替える処理です。
function selectQuiz(event) {
  const selectedButton = event.currentTarget;
  const selectedQuizKey = selectedButton.dataset.quiz;

  if (!quizTitles[selectedQuizKey] || selectedQuizKey === currentQuizKey) {
    return;
  }

  currentQuizKey = selectedQuizKey;
  currentQuizData =
    selectedQuizKey === "generator"
      ? quizData
      : selectedQuizKey === "photoshop"
        ? photoshopIllustratorQuizData
        : selectedQuizKey === "html"
          ? htmlQuizData
          : snsMarketingQuizData;
  currentQuestionIndex = 0;
  score = 0;
  isAnswered = false;
  selectedAnswer = "";

  quizSelectButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  showQuestion();
  questionElement.focus();
}

// イベントを設定します。
choicesElement.addEventListener("click", answerQuestion);
nextButton.addEventListener("click", moveToNextQuestion);
restartButton.addEventListener("click", restartQuiz);
quizSelectButtons.forEach((button) => {
  button.addEventListener("click", selectQuiz);
});

// 最初の問題を表示します。
showQuestion();
