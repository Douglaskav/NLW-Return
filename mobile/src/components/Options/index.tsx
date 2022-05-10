import { Text, View } from "react-native";
import { Copyright } from "../Copyright";

import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { Option } from "../Option";

import { styles } from "./styles";

interface Props {
	onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deixe seu feedback</Text>

			<View style={styles.options}>
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<Option
						onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
						key={key}
						title={value.title}
						image={value.image}
					/>
				))}
			</View>
			<Copyright />
		</View>
	);
}
