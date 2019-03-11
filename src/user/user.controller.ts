import { Body, Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiUseTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(":id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "User trouvé et retourné"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "User trouvé et retourné"
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }

  @Post(":loginInfo")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Connecté"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas connecté"
  })
  async getInfo(@Body() user: any) {
    return this.userService.getInfo(user);
  }

  @Post(":login")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Connecté"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas connecté"
  })
  async login(@Body() user: any) {
    return this.userService.login(user);
  }

  @Get("findEmail/:email")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "User trouvé et retourné"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "User non trouvé"
  })
  async getByEmail(@Param("email") email: string) {
    return this.userService.getByEmail(email);
  }
}
