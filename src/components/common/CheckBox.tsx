import { TouchableOpacity, ViewStyle } from "react-native";
import { pallets } from "../../constant/colors";
import { Ionicons } from "@expo/vector-icons";

interface CheckBoxProps {
    checked: boolean;
    color?: string;
    onChange: () => void;
    style?: ViewStyle;
}

/**
 * Renders a Checkbox button component
 *
 * @param {boolean} checked
 * @param {Function} onChange
 * @param {string} color
 * @param {object} style
 * @returns {JSX.Element}
 */
export const Checkbox = ({
    checked,
    onChange,
    color = pallets.red,
    style = {},
}: CheckBoxProps): JSX.Element => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                backgroundColor: checked ? color : pallets.transparent,
                borderColor: checked ? color : pallets.borderGrey,
                borderRadius: 3,
                borderWidth: 1,
                height: 16,
                justifyContent: 'center',
                width: 16,
                ...style,
            }}
            onPress={onChange}>
            {checked && <Ionicons name="checkmark" color="#fff" size={11} />}
        </TouchableOpacity>
    );
};
