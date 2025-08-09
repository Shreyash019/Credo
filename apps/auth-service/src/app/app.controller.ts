import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { validateEmail, ApiResponse, User } from '@all-in-one/shared-utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): ApiResponse<{ message: string; timestamp: Date }> {
    return {
      success: true,
      data: {
        message: this.appService.getData().message,
        timestamp: new Date()
      }
    };
  }

  @Post('validate-email')
  validateUserEmail(@Body() body: { email: string }): ApiResponse<{ isValid: boolean }> {
    const isValid = validateEmail(body.email);
    
    return {
      success: true,
      data: { isValid },
      message: `Email validation result: ${isValid ? 'valid' : 'invalid'}`
    };
  }

  @Get('user-example')
  getUserExample(): ApiResponse<User> {
    const exampleUser: User = {
      id: '123',
      email: 'user@example.com',
      name: 'John Doe',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return {
      success: true,
      data: exampleUser
    };
  }
}
