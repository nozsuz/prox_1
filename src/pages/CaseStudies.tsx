import React from 'react';
import { Sparkles, Star, ThumbsUp, Clock, ArrowRight, MessageSquare, Lightbulb, CheckCircle } from 'lucide-react';

const useCases = [
  {
    id: '1',
    title: 'AIモデルの最適化',
    category: 'テクノロジー',
    situation: 'ChatGPTが提案したAIモデルの最適化方法の妥当性を確認したい',
    benefits: [
      '専門家による実務的な観点からの分析',
      'コストとパフォーマンスのバランス評価',
      '具体的な実装手順の提案'
    ],
    expert: {
      role: 'AI研究者・機械学習エンジニア',
      expertise: [
        'モデル最適化',
        'パフォーマンスチューニング',
        'コスト効率化'
      ]
    }
  },
  {
    id: '2',
    title: '新規事業戦略の評価',
    category: 'ビジネス',
    situation: 'ChatGPTが提案した新規事業戦略の実現可能性を検証したい',
    benefits: [
      '市場動向と競合分析',
      'リスク評価と対策提案',
      '段階的な実施計画の策定'
    ],
    expert: {
      role: '経営戦略コンサルタント',
      expertise: [
        '事業戦略立案',
        'マーケット分析',
        'リスクマネジメント'
      ]
    }
  },
  {
    id: '3',
    title: '研究データの解析手法',
    category: '科学',
    situation: 'ChatGPTが提案した実験データの解析手法の適切性を確認したい',
    benefits: [
      '統計的手法の妥当性評価',
      '研究トレンドとの整合性確認',
      '追加分析の提案'
    ],
    expert: {
      role: '研究者・データサイエンティスト',
      expertise: [
        'データ解析',
        '統計分析',
        '研究方法論'
      ]
    }
  }
];

export default function CaseStudies() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Sparkles className="w-6 h-6 mr-2" />
            想定される利用シーン
          </h2>
        </div>
        <div className="p-6">
          <div className="grid gap-8">
            {useCases.map(useCase => (
              <div key={useCase.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{useCase.title}</h3>
                  <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                    {useCase.category}
                  </span>
                </div>

                <div className="grid gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">こんな時に</h4>
                    <p className="text-gray-600">{useCase.situation}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">期待できる効果</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">担当する専門家</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-medium text-gray-800 mb-2">{useCase.expert.role}</div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.expert.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-start gap-4">
          <ThumbsUp className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">あなたのユースケースは？</h3>
            <p className="mb-4">
              ChatGPTの回答を専門家がレビュー。より確実な成果につながります。
            </p>
            <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              分析を依頼する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}