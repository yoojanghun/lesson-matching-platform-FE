import { Music } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">레슨매치</span>
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
  );
}
