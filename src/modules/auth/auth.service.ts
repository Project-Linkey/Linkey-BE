import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  // [일반]회원가입
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  // [일반]로그인
  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // 회원 정보 수정
  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  // 회원 탈퇴
  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
