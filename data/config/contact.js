export const contactConfig = {
	branding: {
		name: 'Redevelopment Resources',
		logoUrl:
			'https://cdn.sanity.io/images/g10gcdsi/production/c81d758e780e808bdfa016e8af8edd38e0d30c77-720x161.png', 
		colors: {
			background: '#F6F1F1', // white
			surface: '#E9DFC9', // Cream, "Submission Details" box
			accent: '#8E4D40', // Maroon, buttons/eyebrow/border
			text: '#0F1A25', // Navy
			textMuted: '#ACA48A', // Sage Gray
		},
		contactInfo: {
			phone: '(715)-581-1452', // fallback only, seoSettings.phone wins if set
			email: process.env.CLIENT_EMAIL,
		},
	},

	features: {
		autoResponseEmail: true, // flip once/if they pay for it
	},

	formFields: [
		{
			name: 'name',
			label: 'First and last name',
			required: true,
			type: 'text',
			placeholder: 'First and last name',
		},
		{
			name: 'email',
			label: 'Email',
			required: true,
			type: 'email',
			placeholder: 'you@example.com',
		},
		{
			name: 'organization',
			label: 'Organization',
			required: false,
			type: 'text',
			placeholder: 'Organization (optional)',
		},
		{
			name: 'sector',
			label: 'Sector',
			required: true,
			type: 'select',
			placeholder: 'Public or Private',
			options: [
				{ value: 'public', label: 'Public' },
				{ value: 'private', label: 'Private' },
			],
		},
		{
			name: 'message',
			label: 'Your message',
			required: false,
			type: 'textarea',
			placeholder: 'Tell us about your project...',
		},
	],

	messaging: {
		clientEmailSubject: (name) => `New Website Inquiry from ${name}`,
		autoResponseSubject: (name) => `${name}, We Received Your Message`,

		clientNotificationEyebrow: 'New Website Inquiry',
		clientNotificationHeading: 'New Contact Form Submission',
		clientNotificationIntro:
			'A new project inquiry has come in through the Redevelopment Resources website.',

		autoResponseEyebrow: 'Message Received',
		autoResponseGreeting: (name) => `Thanks for reaching out, ${name}!`,
		autoResponseBody:
			"We've received your message and will be in touch soon to talk through your project.",
		autoResponseUrgentNote:
			'If you have any urgent questions, feel free to call us directly.',
		signoffLabel: 'Best regards,',
		autoResponseClosing: 'Redevelopment Resources',
	},
};
