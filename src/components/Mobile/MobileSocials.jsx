import { SocialIcon } from 'react-social-icons';

function MobileSocials() {
  return (
    <div className="h-[250px] px-[20px] py-[50px]">
        <div className="flex flex-col justify-between h-full items-center">
            <p className="font-black justify-center items-center">Would you like to see more?</p>
            <div className="flex items-center justify-center space-x-3">
            <SocialIcon bgColor={""} style={{height: "30px", width: "30px"}} url="https://instagram.com/kebipet2023/?igshid=YmMyMTA2M2Y%3D"/>
            <SocialIcon bgColor={""} style={{height: "30px", width: "30px"}} url="https://twitter.com"/>
            <SocialIcon bgColor={""} style={{height: "30px", width: "30px"}} url="https://facebook.com"/>
            <SocialIcon bgColor={""} style={{height: "30px", width: "30px"}} url="https://youtube.com"/>
            </div>
            <p className="font-light tracking-wider text-lg"><span className=" text-blue-500 font-bold">Subscribe </span>on our newsletter</p>
        </div>
    </div>
  )
}

export default MobileSocials
