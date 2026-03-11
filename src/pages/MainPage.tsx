import { Search, Music, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// 인기 악기 카테고리
const categories = [
  { id: 1, name: '피아노', icon: '🎹', count: 234 },
  { id: 2, name: '기타', icon: '🎸', count: 189 },
  { id: 3, name: '바이올린', icon: '🎻', count: 156 },
  { id: 4, name: '드럼', icon: '🥁', count: 143 },
  { id: 5, name: '보컬', icon: '🎤', count: 198 },
  { id: 6, name: '색소폰', icon: '🎷', count: 87 },
  { id: 7, name: '플루트', icon: '🪈', count: 92 },
  { id: 8, name: '첼로', icon: '🎻', count: 78 },
];

// 인기 강사 목업 데이터
const instructors = [
  {
    id: 1,
    name: '김민수',
    instrument: '피아노',
    rating: 4.9,
    reviews: 127,
    price: '50,000원',
    experience: '15년',
    image: 'https://images.unsplash.com/photo-1617398745178-f40f24bbaa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHRlYWNoZXIlMjBsZXNzb24lMjBwaWFub3xlbnwxfHx8fDE3NzMyMDQ3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['초보자 환영', '클래식', '재즈']
  },
  {
    id: 2,
    name: '이지은',
    instrument: '기타',
    rating: 4.8,
    reviews: 94,
    price: '45,000원',
    experience: '10년',
    image: 'https://images.unsplash.com/photo-1758524944402-1903b38f848f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjA0NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['어쿠스틱', '핑거스타일', '작곡']
  },
  {
    id: 3,
    name: '박서준',
    instrument: '바이올린',
    rating: 5.0,
    reviews: 156,
    price: '60,000원',
    experience: '20년',
    image: 'https://images.unsplash.com/photo-1755389176283-3cd924205df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBtdXNpYyUyMHN0dWRlbnR8ZW58MXx8fHwxNzczMjA0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['오케스트라', '입시', '전문가']
  },
  {
    id: 4,
    name: '정하늘',
    instrument: '드럼',
    rating: 4.7,
    reviews: 83,
    price: '55,000원',
    experience: '12년',
    image: 'https://images.unsplash.com/photo-1619597255291-48ab67c43860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtcyUyMHBlcmN1c3Npb24lMjB0ZWFjaGVyfGVufDF8fHx8MTc3MzIwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['록', '재즈', '펑크']
  }
];

// 이용 방법
const steps = [
  {
    id: 1,
    title: '원하는 레슨 찾기',
    description: '악기별, 지역별로 다양한 강사님들의 레슨을 검색하세요.',
    icon: Search
  },
  {
    id: 2,
    title: '레슨 요청 보내기',
    description: '마음에 드는 강사님께 레슨 요청을 보내세요.',
    icon: Users
  },
  {
    id: 3,
    title: '레슨 시작하기',
    description: '강사님의 승인 후 레슨 일정을 조율하고 시작하세요.',
    icon: CheckCircle
  }
];

export default function MainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 헤더 */}
      <header className="border-b sticky top-0 bg-background/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">레슨매치</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">레슨 찾기</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">강사 등록</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">이용 방법</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost">로그인</Button>
              <Button>회원가입</Button>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-amber-50 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              나에게 딱 맞는<br />악기 레슨을 찾아보세요
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              전문 강사님들과 함께하는 1:1 맞춤 악기 레슨
            </p>
            
            {/* 검색 바 */}
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-2 flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="어떤 악기를 배우고 싶으신가요?" 
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button size="lg" className="px-8">검색</Button>
            </div>
          </div>

          {/* 통계 */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,234+</div>
              <div className="text-muted-foreground mt-1">전문 강사</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15,678+</div>
              <div className="text-muted-foreground mt-1">진행된 레슨</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-muted-foreground mt-1">평균 평점</div>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 악기 카테고리 */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            인기 악기 카테고리
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}개 레슨</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 강사 */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">인기 강사</h2>
            <Button variant="outline">전체 보기</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <ImageWithFallback 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {instructor.instrument}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">경력 {instructor.experience}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{instructor.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {instructor.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{instructor.price}</span>
                    <span className="text-xs text-muted-foreground">리뷰 {instructor.reviews}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 방법 */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            이용 방법
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            간단한 3단계로 원하는 악기 레슨을 시작할 수 있습니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">STEP {step.id}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            강사이신가요?
          </h2>
          <p className="text-xl mb-8 text-amber-50/90">
            레슨매치에 등록하고 더 많은 학생들을 만나보세요
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="px-8">
              강사 등록하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white border-white hover:bg-white hover:text-amber-700"
            >
              자세히 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-[#1a1206] text-[#f6e9c9] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold text-white">레슨매치</span>
              </div>
              <p className="text-sm text-[#e6d3a8]">
                전문 강사와 학생을 연결하는<br />악기 레슨 매칭 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">레슨 찾기</a></li>
                <li><a href="#" className="hover:text-white transition-colors">강사 등록</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용 방법</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">약관</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            © 2026 레슨매치. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
