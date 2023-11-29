import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Nome completo.' })
  @IsString({ message: 'Nome deve ser escrito.' })
  fullname: string;

  @Field()
  @IsNotEmpty({ message: 'Senha Necessária.' })
  @MinLength(8, { message: 'A senha deve ter pelo menos 8digitos.' })
  password: string;

  // senhas temqser iguais

  @Field()
  @IsNotEmpty({ message: 'Confirmar senha é obrigatório.' })
  // senha temq ser igual
  confirmPassword: string;

  @Field()
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  @IsEmail({}, { message: 'Email deve ser valido.' })
  email: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  @IsEmail({}, { message: 'Email deve ser valido.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Senha Necessária.' })
  password: string;
}