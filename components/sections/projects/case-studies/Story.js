// Story.js
'use client'

import { motion } from 'framer-motion'
import SplitContent from '@/components/layout/SplitContent'
import SectionHeading from '@/components/ui/SectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
}

const Story = ({ data }) => {
  const story = data || []
  if (!story.length) return null

  return (
    <>
      {story.map(({ heading, textBlocks }, index) => (
        <div key={index} className='border-t border-accent/50'>
          <SplitContent
            left={
              <motion.div {...fadeUp}>
                <SectionHeading
                  label={index === 0 ? 'The story' : undefined}
                  heading={heading}
                  as='h2'
                  onDark={false}
                />
              </motion.div>
            }
            right={
              textBlocks?.length > 0 && (
                <motion.div {...fadeUp} className='space-y-2'>
                  {textBlocks.map((block, blockIndex) => (
                    <p key={blockIndex} className='text-paragraph-lg'>
                      {block}
                    </p>
                  ))}
                </motion.div>
              )
            }
          />
        </div>
      ))}
    </>
  )
}

export default Story