import { useState, useRef } from 'react'
import '../Components/Giftstyle.css'
import image2 from '../image/6.1.png'
import image4 from '../image/8.gif'
import image5 from '../image/10.gif'

function Gift() {
    const correctPass = ["O", "P", "E", "N"];
    const [input, setInput] = useState(Array(4).fill(''));
    const [isUnlocked, setIsUnlocked] = useState(false);
    const inputRefs = useRef([]);
    const [size, setSize] = useState(100);
    const [size2, setSize2] = useState(100);

    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedImage, setExpandedImage] = useState(null);

    //imageSrc แทนเป็นอะไรก็ได้
    const handleImageClick = (imageSrc) => {
        setExpandedImage(imageSrc);
        setIsExpanded(true);
    };

    const closeExpandedImage = () => {
        setIsExpanded(false);
        setExpandedImage(null);
    };

    const handleClick = () => {
        if (size > 0) {
            setSize(size - 20);
            setSize2(size2 + 20)
        }
        else {
            handleImageClick(image2);
        }

    }

    const handleInputChange = (index, value) => {
        if (/^[a-zA-Z0-9]?$/.test(value)) {
            const updatedInput = [...input];
            updatedInput[index] = value.toUpperCase();
            setInput(updatedInput);

            // ย้าย cursor ไปช่องถัดไปอัตโนมัติ
            if (value && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }

            // เช็คว่ารหัสผ่านถูกต้องหรือไม่
            if (JSON.stringify(updatedInput) === JSON.stringify(correctPass)) {
                setIsUnlocked(true);
            }
        }
    };

    return (
        <div className='container text-7xl mt-20 text-center text-rose-400 font-bold justify-items-center'>
            {isUnlocked ? (
                <div className='flex flex-col justify-center items-center '>
                    {/* <label className="swap swap-flip text-9xl"> */}
                    {/* this hidden checkbox controls the state */}
                    {/* <input type="checkbox" />

                        <div className="swap-on">
                            <img src={image2} alt="" />
                        </div>
                        <div className="swap-off">
                            <img src={image1} alt=""/>
                        </div> */}
                    {/* </label> */}
                    <p className='text-4xl mb-10'>ขอจุ๊บหน่อย</p>
                    <div className='size-60 ml-20'>
                        <img src={image5} className='max-w-full max-h-full' />
                    </div>
                    <div className='size-60 flex justify-between mt-10 ml-5'>
                        <button
                            className="btn btn-success"
                            onClick={() => handleImageClick(image4)}
                            style={{
                                width: `${size2}px`,
                                height: `${size2}px`,
                                fontSize: `${size2 / 2}px`, // ปรับขนาดฟอนต์ตามปุ่ม
                                transition: "all 0.3s ease", // เพิ่มเอฟเฟกต์การเปลี่ยนแปลง
                            }}
                        >
                            ให้
                        </button>
                        <button
                            className="btn btn-error"
                            onClick={handleClick}
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                fontSize: `${size / 2}px`, // ปรับขนาดฟอนต์ตามปุ่ม
                                transition: "all 0.3s ease", // เพิ่มเอฟเฟกต์การเปลี่ยนแปลง
                            }}>
                            ไม่
                        </button>
                        {isExpanded && (
                            <div className="image-modal" onClick={closeExpandedImage}>
                                <img src={expandedImage} alt="Expanded" className="expanded-image" />
                            </div>
                        )}
                    </div>
                </div>

            ) : (
                <>
                    <div className='container w-80'>
                        <h1>Gift Zone</h1>
                        <p>🎁</p>
                        <span className='text-sm'> เปิด ภาษาอังกฤษคือ</span>
                    </div>
                    <div className='input-container'>
                        {input.map((value, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)} // เก็บ reference ของ input field
                                type='text'
                                maxLength="1"
                                value={value}
                                className='input-box'
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Gift