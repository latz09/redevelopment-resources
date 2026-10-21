const baseInputClasses =
	'w-full px-1 py-0.75 border border-dark/20 rounded bg-white text-paragraph  focus:outline-none focus:border-secondary transition-all duration-300';

// One field, any type. This is the whole reason ContactForm.js used to need
// editing for one-off fields — now a new field is a clientConfig.js entry,
// not a JSX change.
const renderField = (field, formData, handleInputChange) => {
	const value = formData[field.name] ?? '';

	switch (field.type) {
		case 'textarea':
			return (
				<textarea
					id={field.name}
					name={field.name}
					value={value}
					onChange={handleInputChange}
					required={field.required}
					placeholder={field.placeholder}
					rows={field.rows || 2}
					className={`${baseInputClasses} resize-none`}
				/>
			);

		case 'select':
			return (
				<select
					id={field.name}
					name={field.name}
					value={value}
					onChange={handleInputChange}
					required={field.required}
					className={baseInputClasses}
				>
					<option value=''>
						{field.placeholder || `Select ${field.label.toLowerCase()}`}
					</option>
					{field.options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			);

		case 'radio':
			return (
				<div className='flex flex-wrap gap-0.75'>
					{field.options?.map((option) => {
						const isSelected = value === option.value;
						return (
							<label
								key={option.value}
								className={`flex items-center gap-0.5 px-1 py-0.5 border rounded text-paragraph-sm cursor-pointer transition-colors duration-200 ${
									isSelected
										? 'border-secondary bg-secondary/10'
										: 'border-dark/20 hover:border-dark/40'
								}`}
							>
								<input
									type='radio'
									name={field.name}
									value={option.value}
									checked={isSelected}
									onChange={handleInputChange}
									required={field.required}
									className='accent-secondary'
								/>
								{option.label}
							</label>
						);
					})}
				</div>
			);

		default:
			// text, email, tel — and anything else a plain <input type="..."> already knows how to be
			return (
				<input
					type={field.type}
					id={field.name}
					name={field.name}
					value={value}
					onChange={handleInputChange}
					required={field.required}
					placeholder={field.placeholder}
					className={baseInputClasses}
				/>
			);
	}
};

// textarea/radio fields take the full row — a textarea in a half column looks
// cramped, and a radio group's option count doesn't predictably fit one.
const FULL_WIDTH_TYPES = ['textarea', 'radio'];

const ContactForm = ({
	fields,
	formData,
	handleInputChange,
	handleSubmit,
	handleReset,
	isLoading,
	error,
	success,
}) => {
	return (
		<form onSubmit={handleSubmit} className=''>
			<div className='mb-2'>
				<h5>Fill out the form to start the conversation</h5>
			</div>

			<div
				className={`grid lg:grid-cols-2 gap-1.5 gap-x-2 mb-2 transition-opacity duration-300 ${
					success ? 'opacity-75' : ''
				}`}
			>
				{fields.map((field) => (
					<div
						key={field.name}
						className={
							FULL_WIDTH_TYPES.includes(field.type) ? 'lg:col-span-2' : ''
						}
					>
						<label
							htmlFor={field.name}
							className='text-paragraph-sm block mb-[0.12rem] leading-[140%]'
						>
							{field.label}
							{field.required && '*'}
						</label>
						{renderField(field, formData, handleInputChange)}
					</div>
				))}
			</div>

			<button
				type={success ? 'button' : 'submit'}
				onClick={success ? handleReset : undefined}
				disabled={isLoading}
				className={`group text-button inline-flex items-center justify-center rounded transition-all duration-300 py-[0.62rem] px-1 border active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ${
					success
						? 'bg-light text-secondary border-secondary hover:bg-secondary hover:text-white'
						: 'bg-secondary text-white border-secondary hover:text-secondary hover:bg-light hover:border-secondary'
				}`}
			>
				{isLoading ? (
					'Sending...'
				) : success ? (
					<>
						<span className='group-hover:hidden'>
							Message sent successfully
						</span>
						<span className='hidden group-hover:inline '>
							Send another message?
						</span>
					</>
				) : (
					'Send Message'
				)}
			</button>

			{error && (
				<p className='mt-1 p-1 rounded border border-dark/20 text-caption text-dark/70 bg-white'>
					{error}
				</p>
			)}
		</form>
	);
};
export default ContactForm;
