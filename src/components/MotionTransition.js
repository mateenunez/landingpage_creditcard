import { fadeIn } from '@/utils/transitions';
import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function MotionTransition(props) {

    const {children, className} = props;
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])


  return (
    <div ref={ref}>
        <motion.div className={className} initial="hidden" animate={mainControls} exit="hidden" variants={fadeIn()}>
            {children}
        </motion.div>
    </div>
  )
}

export default MotionTransition