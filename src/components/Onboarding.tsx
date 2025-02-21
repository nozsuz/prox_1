import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, Award, CheckCircle, Brain, 
  Sparkles, Target, FileText, MessageSquare 
} from 'lucide-react';

const expertProfiles = [
  {
    name: '山田太郎',
    title: 'AI研究者・博士（工学）',
    organization: 'テックラボ株式会社',
    certifications: ['情報処理安全確保支援士', 'AIソリューションアーキテクト'],
    awards: ['日本テクノロジー大賞 優秀賞'],
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: '鈴木花子',
    title: '経営戦略コンサルタント',
    organization: 'グローバルコンサル株式会社',
    certifications: ['中小企業診断士', 'PMP'],
    awards: ['ビジネスコンサルティングアワード金賞'],
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];

const comparisonExample = {
  query: 'AIモデルの最適化方法について',
  chatgpt: `
    1. バッチサイズの調整
    2. 学習率の最適化
    3. モデルの軽量化
    4. データの前処理の改善
  `,
  expert: {
    strengths: [
      '基本的な最適化手法を網羅',
      '一般的なベストプラクティスに準拠',
      'ステップバイステップのアプローチ'
    ],
    improvements: [
      'ハードウェアリソースの制約を考慮した具体的な数値範囲の提示',
      'コスト効率を考慮したクラウド環境での運用方法',
      'ビジネスKPIとの連携方法の提案'
    ],
    recommendation: `
      実践的な最適化アプローチ：
      1. リソース制約を考慮したバッチサイズ設定（16-128の範囲で段階的に調整）
      2. サイクリック学習率with warmup（初期0.001、最大0.01）
      3. 量子化とプルーニングの併用（モデルサイズ30%削減が目標）
      4. GPU使用率に基づくデータローダーの最適化
    `
  }
};

const OnboardingTour = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <Brain className="w-6 h-6" />
                <h3 className="text-xl font-semibold">AIと専門家の連携</h3>
              </div>
              <p className="text-gray-600">
                ChatGPTの回答を、各分野の専門家が実務経験に基づいて分析。
                より実践的で確実なソリューションを提供します。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">AIの役割</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>基本的な解決策の提示</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>24時間即時レスポンス</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">専門家の役割</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>実務経験に基づく分析</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>具体的な実装方法の提案</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-semibold">厳選された専門家</h3>
              </div>
              <p className="text-gray-600">
                実績と評価に基づいて選定された専門家が、高品質な分析を提供します。
              </p>
              <div className="grid gap-4">
                {expertProfiles.map((expert, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-800">{expert.name}</h4>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{expert.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{expert.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {expert.certifications.map((cert, i) => (
                          <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <Target className="w-6 h-6" />
                <h3 className="text-xl font-semibold">分析の流れ</h3>
              </div>
              <div className="grid gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">ChatGPTの回答</h4>
                  <pre className="whitespace-pre-wrap text-gray-600 font-sans">
                    {comparisonExample.chatgpt}
                  </pre>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">専門家の分析</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">優れている点</h5>
                      <ul className="space-y-1">
                        {comparisonExample.expert.strengths.map((strength, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">改善点と提案</h5>
                      <ul className="space-y-1">
                        {comparisonExample.expert.improvements.map((improvement, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-4 border-t">
            <div className="text-sm text-gray-500">
              ステップ {step} / {totalSteps}
            </div>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              {step === totalSteps ? '始める' : '次へ'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TutorialQuestion = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Brain className="w-6 h-6 mr-2" />
          チュートリアル：最初の分析依頼
        </h2>
      </div>
      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  ChatGPTの回答を用意
                </h3>
                <p className="text-gray-600">
                  分析してほしいChatGPTの回答を準備します
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                例：「AIモデルの最適化方法について」のChatGPTの回答
              </p>
              <pre className="mt-2 whitespace-pre-wrap text-gray-800 font-sans">
                {comparisonExample.chatgpt}
              </pre>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              次のステップへ
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  懸念点を記入
                </h3>
                <p className="text-gray-600">
                  ChatGPTの回答で不十分な点や確認したい点を記入します
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">例：</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2 text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  具体的なパラメータ範囲が示されていない
                </li>
                <li className="flex items-center gap-2 text-gray-800">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  実際の運用コストが考慮されていない
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                戻る
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                次のステップへ
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  専門分野を選択
                </h3>
                <p className="text-gray-600">
                  分析を依頼する専門分野を選択します
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-indigo-50 border-2 border-indigo-500 rounded-lg text-left">
                <h4 className="font-medium text-gray-800 mb-2">テクノロジー</h4>
                <p className="text-sm text-gray-600">
                  AI・機械学習、ソフトウェア開発など
                </p>
              </button>
              <button className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left hover:bg-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">ビジネス</h4>
                <p className="text-sm text-gray-600">
                  経営戦略、マーケティングなど
                </p>
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                戻る
              </button>
              <Link
                to="/analysis"
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                実際に分析を依頼する
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { OnboardingTour, TutorialQuestion };