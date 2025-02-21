import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap } from 'lucide-react';

const plans = [
  {
    name: 'ライトプラン',
    price: '15,000',
    description: '単発の分析に最適',
    features: [
      '月1回の分析依頼',
      '簡易レポート（1～2ページ）',
      '推奨アクション 3つまで',
      '1,000ptプレゼント（Q&A 2回: 500pt×2, 15分ミーティング 1回: 1,000pt）'
    ],
    recommendedFor: [
      '短期間で簡単なアドバイスや分析を受けたい',
      '追加で専門家に質問できるオプションが欲しい',
      'コードレビュー・市場調査・デザインチェックなどを依頼したい'
    ],
    recommended: false,
    buttonText: 'ライトプランで始める'
  },
  {
    name: 'スタンダードプラン',
    price: '39,800',
    description: '定期的な分析に最適',
    features: [
      '月2回の分析依頼',
      '詳細レポート（3～5ページ）',
      '推奨アクション制限なし',
      '3,000ptプレゼント（15分ミーティング 2回: 1,500pt×2, 30分レビュー 1回: 3,000pt）',
      'プレゼン資料テンプレート付き'
    ],
    recommendedFor: [
      '継続的に専門家のサポートを受けたい',
      '定期的な技術レビューやビジネス戦略アドバイスが欲しい',
      '重要なプロジェクトに向けた準備を進めたい'
    ],
    recommended: true,
    buttonText: '人気のスタンダードプラン'
  },
  {
    name: 'プロフェッショナルプラン',
    price: '79,800',
    description: 'ビジネス利用に最適',
    features: [
      '月3回の分析依頼 + 緊急対応1回',
      '最優先での分析対応',
      '専属のリードコンサルタントが担当',
      '7,000ptプレゼント（30分レビュー 2回: 3,000pt×2, 15分ミーティング 1回: 1,000pt）',
      'プレゼン用資料作成',
      'オンラインミーティング（45分×1回）'
    ],
    recommendedFor: [
      '高度な技術評価やビジネス戦略を専門家と深く議論したい',
      '投資家向け資料や新規事業の提案準備をしたい',
      '緊急の相談や迅速なフィードバックが必要なプロジェクトを抱えている'
    ],
    recommended: false,
    buttonText: 'プロプランで始める'
  }
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* ページタイトル */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">料金プラン</h2>
        <p className="text-gray-600">
          ニーズに合わせて選べる3つのプラン。専門家とのやり取りに使えるポイントも付与されます。
        </p>
      </div>

      {/* プランカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl ${plan.recommended ? 'border-2 border-indigo-500 shadow-lg relative' : 'border border-gray-200'} bg-white p-6`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                おすすめ
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-gray-600 mb-4">{plan.description}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">¥{plan.price}</div>
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
            {plan.recommendedFor && (
              <div className="mb-6">
                <h4 className="text-gray-700 font-semibold mb-2">📝 こんな方におすすめ</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {plan.recommendedFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
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

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">よくある質問</h3>
        </div>
        <div className="space-y-4">
          {[
            {
              question: '解約はいつでもできますか？',
              answer:
                'はい、解約はいつでも可能です。ただし、解約後は次回更新時までサービスをご利用いただけます。'
            },
            {
              question: '法人向けのカスタマイズプランはありますか？',
              answer:
                'はい、企業向けのカスタムプランをご提案可能です。詳細はお問い合わせください。'
            },
            {
              question: 'ポイントの有効期限はありますか？',
              answer:
                'ポイントは付与された月から6ヶ月間有効です。期限内にご利用ください。'
            },
            {
              question: 'ポイントの追加購入はできますか？',
              answer:
                'はい、追加ポイントの購入が可能です。500pt（¥2,500）からご購入いただけます。'
            },
            {
              question: '分析結果の納期はどれくらいですか？',
              answer:
                '通常、ライトプランは2営業日以内、スタンダード・プロフェッショナルプランは5営業日以内に結果をお届けします。'
            },
            {
              question: '専門家と直接やり取りできますか？',
              answer:
                'スタンダードプラン以上で、オンラインミーティングや追加の質疑応答をご利用いただけます。'
            }
          ].map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-4">
                <h5 className="font-medium text-gray-800">{faq.question}</h5>
                <span className="ml-4">
                  <Zap className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </span>
              </summary>
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
