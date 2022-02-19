import github from '../res/github.png'
import linkedin from '../res/linkedin.png'
import email from '../res/email.png'
import location from '../res/location.png'

export const Socials = () => {
    return (
        <div className='hovering' style={{ display: 'flex', flexDirection: "row", zIndex:1000 }}>
            <div style={{ display: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex-start" }} >
                        <a href="https://www.google.com/maps/place/Las+Vegas,+NV/@36.1731956,-115.305559,11.25z/data=!4m5!3m4!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.1699412!4d-115.1398296">
                            <img className='socials-icon' alt='location' src={location} />
                        </a>
                    </div>
                    <div style={{ display: "flex-end" }} >
                        <a href="https://www.linkedin.com/in/daniel-nabours-b23563184/" >
                            <img className='socials-icon' alt='linkedin' src={linkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex-start" }} >
                        <a href="mailto:danielnabours@gmail.com" >
                            <img className='socials-icon' alt='email' src={email} />
                        </a>
                    </div>
                    <div style={{ display: "flex-end" }} >
                        <a href="https://github.com/Daniel-Nabours">
                            <img className='socials-icon' alt='github' src={github} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}