import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CircleUserRound, House } from 'lucide-react';

interface HeaderProps {
    pageName: string;
}

export function Header(HeaderProps: HeaderProps) {
  const navigate = useNavigate();
  const { pageName } = HeaderProps;
  const { user, logout } = useAuth();
  const userName = user;

  return (
    <div className=" absolute top-0 left-0 flex-row w-full bg-slate-700 p-4 flex items-center justify-center">

        <div className="flex flex-row justify-between absolute left-5">
                <House onClick ={() => navigate("/tasks")} className="text-white" />
                
        </div>
        
      
        <div className="flex items-center space-x-4 text-white">

            <h1 className="text-3xl text-slate-100 font-bold text-center px-7">
                {pageName}
            </h1>

        </div>
          
        <div className="flex flex-row justify-between absolute right-5">
            <div className="flex items-center space-x-5 relative left-0 top-0 p-0">
                <CircleUserRound className="text-white userIcon" />
                <div className="flex flex-col">
                    <p className="text-white text-lg header">{userName}</p>
                    <p><a className="text-white text-sm header" onClick={logout}>Sair</a></p>
                </div>
            </div>
        </div>
        
    </div>
  );
}