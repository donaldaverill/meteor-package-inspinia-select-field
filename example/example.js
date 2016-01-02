if (Meteor.isClient) {
	Template.formTemplate.helpers({
		nameChanged() {
			return function() {
				var newValue = this.$('select').val();
        console.log('You changed the selection!', newValue);
			};
		},
		list() {
			return [
        {value: null, content: null},
				{value: 'mike-blowers', content: 'Mike Blowers'},
				{value: 'darren-bragg', content: 'Darren Bragg'},
				{value: 'jay-buhner', content: 'Jay Buhner'},
				{value: 'joey-cora', content: 'Joey Cora'},
				{value: 'ken-griffey-jr', content: 'Ken Griffey Jr.'},
				{value: 'felix-fermin', content: 'Félix Fermín'},
				{value: 'randy-johnson', content: 'Randy Johnson'},
				{value: 'edgar-martinez', content: 'Edgar Martinez'},
				{value: 'tino-martinez', content: 'Tino Martinez'},
				{value: 'dan-wilson', content: 'Dan Wilson'},
			];
		}
	});
}
