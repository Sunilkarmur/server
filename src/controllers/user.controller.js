import sendEmail from '../utils/sendEmail.utils.js';



/******************************************************************************
 *                              User Controller
 ******************************************************************************/

class UserController {

    sendInquiryEmail = async (req, res) => {
        try {

            const name = req.body.name;
            const email = req.body.email;
            const mobile = req.body.mobile;
            const message = req.body.message;

            // console.log(name, email, mobile, message)

            await sendEmail(name, email, mobile, message);

            return res.status(200).send({ message: 'thank you for inquiry!' });
        } catch (error) {
            res.send("An error occured");
            console.log(error);
        }
    };
}


/******************************************************************************
*                               Export
******************************************************************************/
export default new UserController;