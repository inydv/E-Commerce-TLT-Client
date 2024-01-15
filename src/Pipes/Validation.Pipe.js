// CUSTOM IMPORT
import EnumConstant from "../Constants/Enum.Constant.json";

// FUNCTION VALIDATE FORM OR INPUT
export default function Validation(Obj, ValidationConstant) {
    for (const [key, value] of Object.entries(ValidationConstant)) {
        const validate = Obj[key];

        if (value?.required && !validate?.length) {
            return { STATUS: false, MESSAGE: `${key.toUpperCase()} IS REQUIRED` }
        } else if (value?.type === EnumConstant.Validation.Email) {
            const EmailRegex =
                /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

            const IsValid = EmailRegex.test(validate);
            if (!IsValid) return { STATUS: false, MESSAGE: "EMAIL IS NOT VALID" };

            // FURTHER CHECKING OF SOMETHINGS REGEX CAN'T HANDLE
            const Parts = validate.split("@");
            if (Parts[0].length > 64) return { STATUS: false, MESSAGE: "EMAIL IS NOT VALID" };

            const DomainParts = Parts[1].split(".");
            if (
                DomainParts.some(function (Part) {
                    return Part.length > 63;
                })
            )
                return { STATUS: false, MESSAGE: "EMAIL IS NOT VALID" };
        } else if (value?.type === EnumConstant.Validation.Number && (validate?.length < value?.minLength || validate?.length > value?.maxLength)) {
            return { STATUS: false, MESSAGE: `${key.toUpperCase()} MUST HAVE ${value?.minLength} CHAR` }
        }
    }

    return { STATUS: true }
}