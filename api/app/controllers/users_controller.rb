class UsersController < ApplicationController

    def register
        user = User.create(user_params)
        if user.valid?
            app_response(message: 'Registration Successful',
            status: :created, data: user
            )
            else
                app_response(
                    message: 'Registration Failure',
                    status: :unprocessable_entity,
                    data: user.errors.full_messages
                )
            end
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end
end
