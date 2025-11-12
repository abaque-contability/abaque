import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CadastroContas() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-2xl px-6 py-12">
        <Card className="w-full bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Cadastro de Contas Contábeis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="codigo">Código da Conta</Label>
                <Input id="codigo" name="codigo" placeholder="Ex: 1.1.1.01" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="nome">Nome da Conta</Label>
                <Input id="nome" name="nome" placeholder="Ex: Caixa" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea id="descricao" name="descricao" placeholder="Descrição opcional" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tipo">Tipo</Label>
                <select
                  id="tipo"
                  name="tipo"
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700"
                >
                  <option value="ativo">Ativo</option>
                  <option value="passivo">Passivo</option>
                  <option value="receita">Receita</option>
                  <option value="despesa">Despesa</option>
                  <option value="patrimonio_liquido">Patrimônio Líquido</option>
                </select>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
