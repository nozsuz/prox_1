import React from 'react';
import { 
  ArrowRight, Send, Users, FileCheck, Sparkles, CheckCircle, Zap,
  Brain, Shield, Star, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <Send className="w-8 h-8" />, 
    title: '分析依頼の送信',
    description: 'ChatGPTの回答を送信し、専門分野と追加要望を選択。',
    details: [
      '専門分野の選択と要望の記入',
      'ChatGPTの回答の貼り付け'
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />, 
    title: 'AIによる事前分析',
    description: 'AIが回答の妥当性をスコアリングし、専門家の分析をサポート。',
    details: [
      '回答内容の自動チェック',
      '妥当性スコアリングと信頼性評価',
      '専門家への分析ポイント提示'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />, 
    title: '専門家による詳細分析',
    description: '厳選された専門家がAIの分析結果を検証し、最適な解決策を提案。',
    details: [
      'AIの分析結果の検証',
      '実務経験に基づく改善提案',
      '具体的な実装手順の提示'
    ]
  },
  {
    icon: <FileCheck className="w-8 h-8" />, 
    title: '包括的な分析結果の提供',
    description: 'AIと専門家の知見を統合し、実践的なアクションプランを提案。',
    details: [
      'AIと専門家の分析結果の統合',
      '具体的な改善点の説明',
      '実践的なアクションプランの提供'
    ]
  }
];

export default function ServiceFlow() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">サービスの流れ</h2>
        </div>
        <div className="p-6">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-indigo-200 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden text-white">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">サービスを利用してみませんか？</h2>
            <p className="text-indigo-100">
              AIと専門家の知見を組み合わせた、新しい形の分析サービス。
              <br />
              まずは料金プランをご確認ください。
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/pricing"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              料金プランを見る
            </Link>
            <Link
              to="/analysis"
              className="px-6 py-3 bg-indigo-400 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors"
            >
              分析を依頼する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
