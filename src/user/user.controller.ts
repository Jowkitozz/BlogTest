import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiUseTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("delete/:delete")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Supprimé"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas supprimé"
  })
  async delete(@Body("email") email: string) {
    return this.userService.delete(email);
  }

  @Get("admin/:email")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "admin"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas admin"
  })
  async getAdmin(@Param("email") email: string) {
    return this.userService.getAdmin(email);
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

  @Post("loginInfo/:loginInfo")
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

  @Post("update/:update")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Modifié"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas modifié"
  })
  async getUpdate(@Body() user: any) {
    return this.userService.getUpdate(user);
  }

  @Post("login/:login")
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

  @Get("list/:email")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Connecté"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas connecté"
  })
  async userList(@Param("email") email: string) {
    return this.userService.userList(email);
  }
}
