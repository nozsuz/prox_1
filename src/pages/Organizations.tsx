import React from 'react';
import { Building2, Star, Award, BookOpen, Link as LinkIcon, Users } from 'lucide-react';
import { expertiseAreas } from '../data/expertiseAreas';

const experts = {
  tech: [
    {
      name: '山田太郎',
      title: 'AI研究者・博士（工学）',
      organization: 'テックラボ株式会社',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 127,
      certifications: ['情報処理安全確保支援士', 'AIソリューションアーキテクト'],
      awards: ['日本テクノロジー大賞 優秀賞'],
      specialties: ['機械学習', 'ディープラーニング', 'クラウドアーキテクチャ']
    },
    {
      name: '佐藤健一',
      title: 'シニアソフトウェアエンジニア',
      organization: '未来技研',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 93,
      certifications: ['AWS認定ソリューションアーキテクト', 'Google Cloud認定プロフェッショナル'],
      awards: ['Tech Innovation Award 2023'],
      specialties: ['クラウドインフラ', 'マイクロサービス', 'DevOps']
    }
  ],
  science: [
    {
      name: '田中美咲',
      title: '研究員・博士（理学）',
      organization: '国立研究所',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 85,
      certifications: ['分析化学スペシャリスト', '環境計量士'],
      awards: ['日本化学会論文賞'],
      specialties: ['分析化学', '環境分析', '機器分析']
    },
    {
      name: '鈴木一郎',
      title: '主任研究員',
      organization: '先端医療センター',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 4.7,
      reviews: 76,
      certifications: ['臨床検査技師', '細胞検査士'],
      awards: ['医学会優秀研究賞'],
      specialties: ['臨床研究', '細胞生物学', '遺伝子解析']
    }
  ],
  business: [
    {
      name: '中村花子',
      title: '経営戦略コンサルタント',
      organization: 'グローバルコンサル',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 112,
      certifications: ['中小企業診断士', 'PMP'],
      awards: ['ビジネスコンサルティングアワード金賞'],
      specialties: ['事業戦略', 'マーケティング', '組織開発']
    },
    {
      name: '木村隆',
      title: 'ファイナンシャルアドバイザー',
      organization: 'ビジネスイノベーション',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      rating: 4.7,
      reviews: 94,
      certifications: ['公認会計士', 'CFP'],
      awards: ['フィナンシャルプランナー・オブ・ザ・イヤー'],
      specialties: ['財務戦略', 'リスク管理', 'M&A']
    }
  ],
  arts: [
    {
      name: '高橋美優',
      title: 'クリエイティブディレクター',
      organization: 'アートスタジオ',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 138,
      certifications: ['色彩検定1級', 'UXデザイン認定'],
      awards: ['グッドデザイン賞'],
      specialties: ['UI/UXデザイン', 'ブランディング', 'アートディレクション']
    },
    {
      name: '山本大輔',
      title: 'デジタルアーティスト',
      organization: 'クリエイティブラボ',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 91,
      certifications: ['Adobe認定エキスパート', 'デジタルアート認定'],
      awards: ['メディアアート大賞'],
      specialties: ['デジタルアート', 'モーショングラフィックス', '3DCG']
    }
  ]
};

export default function Organizations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ページタイトル */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">専門家一覧</h1>
        <p className="text-gray-600 text-lg">
          各分野のエキスパートが、豊富な経験と専門知識であなたをサポートします。
        </p>
      </div>

      {/* 専門分野ごとのセクション */}
      {expertiseAreas.map(area => (
        <section key={area.id} className="mb-12">
          {/* セクションヘッダー */}
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4 rounded-t-lg">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              {area.icon}
              <span className="ml-2">{area.name}分野の専門家</span>
            </h2>
          </div>
          <div className="bg-white shadow-md rounded-b-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(experts[area.id as keyof typeof experts] || []).map((expert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
                >
                  {/* 画像表示部分：コンテナに固定高さと中央寄せを指定 */}
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  {/* 専門家の詳細 */}
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
                    <p className="text-gray-600">{expert.title}</p>
                    <p className="text-gray-500 text-sm">{expert.organization}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 font-medium">{expert.rating}</span>
                      <span className="ml-2 text-gray-500">({expert.reviews} レビュー)</span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-gray-700 font-semibold mb-1">資格・認定</h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-gray-700 font-semibold mb-1">受賞歴</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {expert.awards.map((award, i) => (
                          <li key={i}>{award}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-gray-700 font-semibold mb-1">専門分野</h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
