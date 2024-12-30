# Portfolio-React

const handlemove = (e) => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "back.out(2)",
    })
  }

    <div id='cursor' className='h-5 w-5 bg-[#564d62ad] rounded-full fixed' ></div>

