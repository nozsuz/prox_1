import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Users } from 'lucide-react';

const plans = [
  {
    name: 'ライト',
    price: '9,800',
    description: '単発の分析に最適',
    features: [
      '1回の分析依頼',
      '基本的な分析レポート',
      '推奨アクション3つまで',
      'ポイント500ptプレゼント'
    ],
    recommended: false,
    buttonText: 'ライトプランで始める'
  },
  {
    name: 'スタンダード',
    price: '29,800',
    description: '定期的な分析に最適',
    features: [
      '月3回まで分析依頼可能',
      '詳細な分析レポート',
      '推奨アクション制限なし',
      'ポイント2,000ptプレゼント',
      'PDF形式の報告書'
    ],
    recommended: true,
    buttonText: '人気のスタンダードプラン'
  },
  {
    name: 'プロフェッショナル',
    price: '79,800',
    description: 'ビジネス利用に最適',
    features: [
      '月10回まで分析依頼可能',
      '最優先での分析対応',
      '専用の専門家チーム',
      'ポイント5,000ptプレゼント',
      'プレゼン用資料作成',
      'オンラインミーティング1回'
    ],
    recommended: false,
    buttonText: 'プロプランで始める'
  }
];

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: '厳選された専門家',
    description: '各分野のトップレベルの専門家が、豊富な実務経験を活かして分析します。'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: '品質保証',
    description: '満足できない場合は全額返金。安心してご利用いただけます。'
  }
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* 個人・小規模事業者向けプラン */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">料金プラン</h2>
        <p className="text-gray-600">
          ニーズに合わせて選べる3つのプラン。いつでも変更可能です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl ${
              plan.recommended
                ? 'border-2 border-indigo-500 shadow-lg relative'
                : 'border border-gray-200'
            } bg-white p-6`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                おすすめ
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <div className="text-gray-600 mb-4">{plan.description}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">
                ¥{plan.price}
              </div>
              <div className="text-sm text-gray-500">月額（税抜）</div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/user-registration"
              className={`block w-full py-2 px-4 rounded-lg text-center font-medium ${
                plan.recommended
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>

      {/* エンタープライズプラン案内 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">エンタープライズプラン</h2>
          <p className="text-lg mb-8">
            大規模な組織向けに、カスタマイズ可能な法人プランをご用意しています。
            <br />
            お客様のニーズに合わせた柔軟なソリューションを提供します。
          </p>
          <Link
            to="/enterprise"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg font-medium"
          >
            エンタープライズプランの詳細を見る
          </Link>
        </div>
      </div>

      {/* 特徴 */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            すべてのプランに含まれる特徴
          </h3>
          <p className="text-gray-600">
            プランに関わらず、高品質なサービスを提供します
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">よくある質問</h3>
        </div>
        <div className="space-y-4">
          <details className="group bg-white rounded-lg shadow-sm">
            <summary className="flex items-center justify-between cursor-pointer p-4">
              <h5 className="font-medium text-gray-800">
                プランはいつでも変更できますか？
              </h5>
              <span className="ml-4">
                <Zap className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </span>
            </summary>
            <div className="px-4 pb-4 text-gray-600">
              はい、プランは月単位でいつでも変更可能です。変更は翌月から適用されます。
            </div>
          </details>
          <details className="group bg-white rounded-lg shadow-sm">
            <summary className="flex items-center justify-between cursor-pointer p-4">
              <h5 className="font-medium text-gray-800">
                分析依頼の上限に達した場合はどうなりますか？
              </h5>
              <span className="ml-4">
                <Zap className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </span>
            </summary>
            <div className="px-4 pb-4 text-gray-600">
              上位プランへの一時的なアップグレードや、追加の分析依頼を個別に承ることが可能です。
            </div>
          </details>
          <details className="group bg-white rounded-lg shadow-sm">
            <summary className="flex items-center justify-between cursor-pointer p-4">
              <h5 className="font-medium text-gray-800">
                ポイントはどのように使用できますか？
              </h5>
              <span className="ml-4">
                <Zap className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </span>
            </summary>
            <div className="px-4 pb-4 text-gray-600">
              専門家への追加の質問や詳細な解説の依頼に使用できます。ポイントは翌月に繰り越すことも可能です。
              必要に応じて追加のポイントを購入することもできます。
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}