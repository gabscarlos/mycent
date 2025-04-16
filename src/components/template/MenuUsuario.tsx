import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

export default function MenuUsuario() {
  const { usuario, logout } = useContext(AutenticacaoContext);

  return (
    <Menu>
      <Menu.Target>
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <div className="hidden md:flex flex-col select-none">
            <span className="text-sm font-bold text-zinc-200">
              {usuario?.nome}
            </span>
            <span className="text-xs text-zinc-400">{usuario?.email}</span>
          </div>
          <Avatar
            size={40}
            radius="xl"
            src={
              usuario?.imagemUrl ??
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=100&w=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Usuário</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsRightLeft size={14} />}
          component={Link}
          href="/"
        >
          Finanças
        </Menu.Item>
        <Menu.Item
          leftSection={<IconUser size={14} />}
          component={Link}
          href="/usuario"
        >
          Meus Dados
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          onClick={logout}
          color="red"
          leftSection={<IconLogout size={14} />}
        >
          Sair do Sistema
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
