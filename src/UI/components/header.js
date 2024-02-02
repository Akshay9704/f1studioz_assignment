import { useNavigate } from 'react-router-dom';
import Logo from "../Assets/logo.png"
import Menu from "../Assets/Menu/menu.png"
import Notify from "../Assets/notify/notify.png"
import Question from "../Assets/question/question.png"
import Avatar from "../Assets/avatar/avatar.png"

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="flex justify-between items-center bg-black px-4 py-2">
            <div onClick={() => navigate('/')} className="flex items-center gap-1 cursor-pointer">
                <img src={Logo} alt="logo" />
                <h1 className="logo text-white text-2xl font-semibold">studioz</h1>
            </div>
            <div className="flex gap-4 items-center">
                <img className="cursor-pointer" src={Menu} alt="menu" />
                <img className="cursor-pointer" src={Notify} alt="notify" />
                <img className="cursor-pointer" src={Question} alt="question" />
                <img className="cursor-pointer" src={Avatar} alt="avatar" />
            </div>
        </header>
    )
}

export default Header