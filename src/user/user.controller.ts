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
}
