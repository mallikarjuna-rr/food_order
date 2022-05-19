



/** OTP */
export const GenerateOTP = async () => {

    return  Math.floor(100000 + Math.random() * 900000);
}

export const ExpiryOTP = async() => {
    const expiry = new Date();
    expiry.setTime(new Date().getTime() + (30*60*1000));
    return expiry;
};

export const onRequestOTP = async(otp:number, toPhoneNumber:string) => {

    const accountSid = 'ACd2739a625e08999fc5d1e5bf9929f9be';
    const authToken = 'b1456a2e19d16ba1102f9bcb10e0a269';
    const client = require('twilio')(accountSid,authToken);

    const response = await client.messages.create({
        body: `Your OTP is ${otp} `,
        from: '+19793106300',
        to: `+91${toPhoneNumber}`
    });

    return response;
}