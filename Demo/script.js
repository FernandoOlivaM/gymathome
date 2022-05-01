new Vue({
	el: "#app",

	data: {
		displayAllMembers: true,
		displayActiveMembers: false,
		displayNewMembers: false,

		allMembers: [
			{
				image:
					"https://uploads-ssl.webflow.com/5b8b085fd92ca04b7aba2bdb/5b8b100b77823a2c3bbc8124_Profile_black.jpg",
				name: "John Doe",
				sex: "male",
				age: 26,
				timeSpent: 6,
				moneySpent: 30
			},
			{
				name: "Max Doe",
				sex: "male",
				age: 18,
				timeSpent: 1,
				moneySpent: 5
			},
			{
				name: "Michael Doe",
				sex: "male",
				age: 20,
				timeSpent: 1,
				moneySpent: 5
			},
			{
				image:
					"https://c-sf.smule.com/rs-s-ash-3/sing_google/performance/cover/a6/06/4870fab3-4f33-4f3c-bd06-1a0dd0d85234.jpg",
				name: "James Doe",
				sex: "male",
				age: 22,
				timeSpent: 14,
				moneySpent: 70
			},
			{
				image:
					"https://res-3.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1440141295/nokd3f8i9nopoosy0rzu.jpg",
				name: "Mark Doe",
				sex: "male",
				age: 49,
				timeSpent: 28,
				moneySpent: 140
			},
			{
				name: "Tony Doe",
				sex: "male",
				age: 19,
				timeSpent: 1,
				moneySpent: 5
			}
		],

		activeMembers: [
			{
				image:
					"https://uploads-ssl.webflow.com/5b8b085fd92ca04b7aba2bdb/5b8b100b77823a2c3bbc8124_Profile_black.jpg",
				name: "John Doe",
				sex: "male",
				age: 26,
				timeSpent: 6,
				moneySpent: 30
			},
			{
				image:
					"https://c-sf.smule.com/rs-s-ash-3/sing_google/performance/cover/a6/06/4870fab3-4f33-4f3c-bd06-1a0dd0d85234.jpg",
				name: "James Doe",
				sex: "male",
				age: 22,
				timeSpent: 14,
				moneySpent: 70
			},
			{
				image:
					"https://res-3.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1440141295/nokd3f8i9nopoosy0rzu.jpg",
				name: "Mark Doe",
				sex: "male",
				age: 49,
				timeSpent: 28,
				moneySpent: 140
			}
		],

		newMembers: [
			{
				name: "Max Doe",
				sex: "male",
				age: 18,
				timeSpent: 1,
				moneySpent: 5
			},
			{
				name: "Michael Doe",
				sex: "male",
				age: 20,
				timeSpent: 1,
				moneySpent: 5
			},
			{
				name: "Tony Doe",
				sex: "male",
				age: 19,
				timeSpent: 1,
				moneySpent: 5
			}
		]
	},

	methods: {
		display: function (tab) {
			if (tab == "active") {
				this.displayActiveMembers = true;

				this.displayAllMembers = false;
				this.displayNewMembers = false;
			}

			if (tab == "all") {
				this.displayAllMembers = true;

				this.displayActiveMembers = false;
				this.displayNewMembers = false;
			}

			if (tab == "new") {
				this.displayNewMembers = true;

				this.displayAllMembers = false;
				this.displayActiveMembers = false;
			}
		}
	}
});
