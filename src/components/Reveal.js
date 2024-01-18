"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"


function Reveal({children}) {

    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const mainControls = useAnimation()
    const sideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            sideControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} className="relative overflow-hidden w-fit ">
    <motion.div 
        variants={{hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}}}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{duration: 0.5, delay: 0.5}}> 
        
        {children}

    </motion.div>
    <motion.div 
        variants={{hidden: {left: 0},
                    visible: {left: "100%"}}}
        initial="hidden"
        animate={sideControls}
        transition={{duration: 0.5, ease: "easeIn"}}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#fe8439",
            zIndex: 20
        }}>

    </motion.div>
    </div>
  )
}

export default Reveal