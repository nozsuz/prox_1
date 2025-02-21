import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Briefcase, Users, Wallet, ArrowRight, CheckCircle, Star, 
  TrendingUp, Send
} from 'lucide-react';

const benefits = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: '高い報酬',
    description: '専門性と経験に応じた報酬体系で、副業としても十分な収入を得ることができます。'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: '柔軟な働き方',
    description: '時間や場所にとらわれず、ご自身のペースで分析業務に取り組めます。'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'キャリアの成長',
    description: '最新のAI技術と専門知識を組み合わせた新しい形の専門家として活躍できます。'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '専門家コミュニティ',
    description: '他分野の専門家との交流を通じて、新しい知見や人脈を広げることができます。'
  }
];

const requirements = [
  '該当分野での実務経験が3年以上',
  '関連する資格や学位の保有',
  '週10時間以上の稼働が可能',
  'オンラインでのコミュニケーションスキル',
  'LinkedIn または ResearchGate のプロフィール連携'
];

const testimonials = [
  {
    name: '山田太郎',
    title: 'AI研究者・博士（工学）',
    content: '私の専門知識を活かしながら、新しい働き方にチャレンジできています。特に、最新のAI技術と実務経験を組み合わせた分析は、とてもやりがいがあります。',
    rating: 5,
    badges: ['AI専門家', 'トップアナリスト', '優秀回答者']
  },
  {
    name: '鈴木花子',
    title: '経営コンサルタント',
    content: '時間に縛られず、自分のペースで仕事ができるのが魅力です。また、適切な報酬設定により、副業としても十分な収入を得ることができています。',
    rating: 5,
    badges: ['ビジネス戦略', '高評価エキスパート']
  }
];

export default function ExpertHome() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* ヒーローセクション */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          あなたの専門知識を
          <br />
          <span className="text-indigo-600">新しい形</span>
          で活かしませんか？
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ChatGPTの時代に、人間ならではの専門性を活かした
          <br />
          新しい働き方を提案します
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/expert-registration"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-lg font-medium group"
          >
            専門家として登録する
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors shadow-lg text-lg font-medium"
          >
            サービス利用はこちら
            <Send className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* メリット */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          専門家として参加するメリット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-indigo-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 応募要件 */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            応募要件
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 専門家の声 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          専門家の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <div className="font-medium text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            あなたも専門家として参加しませんか？
          </h2>
          <p className="text-lg mb-8">
            新しい働き方で、あなたの専門性を活かしましょう。
          </p>
          <Link
            to="/expert-registration"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg font-medium"
          >
            無料で専門家登録する
          </Link>
        </div>
      </section>
    </div>
  );
}