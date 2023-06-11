abstract class AbstractController {
  abstract handle(req: any): void;
}
class UserController extends AbstractController {
  public handle(req: number): void {
    console.log(req)
  }
}
new UserController().handle(123)
