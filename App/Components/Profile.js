import React from 'react';
import Badge from './Badge';
import Humanize from 'humanize-component';
import Separator from './Helpers/Separator'

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	rowContainer: {
		padding: 10
	},
	rowTitle: {
		color: '#48B8EC',
		fontSize: 16
	},
	rowContent: {
		fontSize: 19
	}
})

class Profile extends React.Component {
	render() {
		const userInfo = this.props.userInfo
		const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
		const list = topicArr.map((item, index) => {
			if (!userInfo[item]) {
				return <View key={index} />
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}> {Humanize(item)} </Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
						<Separator />
					</View>
				)
			}
		})

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={userInfo} />
				{list}
			</ScrollView>
		)
	}
}

Profile.propTypes = {
	userInfo: React.PropTypes.object.isRequired
}

export default Profile;
