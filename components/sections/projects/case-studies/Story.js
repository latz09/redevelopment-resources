// Story.js
import SplitContent from '@/components/layout/SplitContent'
import SectionHeading from '@/components/ui/SectionHeading'

const Story = ({ data }) => {
  const story = data || []
  if (!story.length) return null

  return (
    <>
      {story.map(({ heading, textBlocks }, index) => (
        <SplitContent
          key={index}
          className='border-t border-accent/50'
          left={
            <SectionHeading
              label={index === 0 ? 'The story' : undefined}
              heading={heading}
              as='h2'
              onDark={false}
            />
          }
          right={
            textBlocks?.length > 0 && (
              <div className='space-y-2'>
                {textBlocks.map((block, blockIndex) => (
                  <p key={blockIndex} className='text-paragraph-lg'>
                    {block}
                  </p>
                ))}
              </div>
            )
          }
        />
      ))}
    </>
  )
}

export default Story