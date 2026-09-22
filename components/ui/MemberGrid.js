// components/ui/MemberGrid.js
import SanityImage from '@/components/ui/SanityImage';

const COLUMN_CLASSES = {
	3: 'lg:grid-cols-3',
	4: 'lg:grid-cols-4',
};

const SIZES_BY_COLUMNS = {
	3: '(min-width: 1024px) 33vw, 100vw',
	4: '(min-width: 1024px) 25vw, 100vw',
};

const MemberGrid = ({ members, columns = 3 }) => {
	return (
		<div
			className={`grid ${COLUMN_CLASSES[columns] || COLUMN_CLASSES[3]} gap-[1px] bg-accent/50 border border-accent/50`}
		>
			{members &&
				members.map((member, index) => (
					<div key={index} className='p-1.25 bg-dark space-y-2.5'>
						<div className='relative w-full aspect-[67/66] overflow-hidden rounded'>
							<SanityImage
								image={member.photo}
								alt={member.name}
								preset='teamMemberPhoto'
								fill
								sizes={SIZES_BY_COLUMNS[columns] || SIZES_BY_COLUMNS[3]}
								className='rounded'
							/>
						</div>
						<div className='space-y-1'>
							<h4 className='text-light'>{member.name}</h4>
							<p className='text-overline text-accent'>{member.role}</p>
							<p className='text-paragraph text-light'>{member.bio}</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default MemberGrid;